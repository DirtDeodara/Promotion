import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './studentItemListStyles';
const moment = require("moment");
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.82`;
const placeHolderImage = require("../../../assets/a.jpg"); //TODO this is just a placeholer!!

const StudentListItem = ({ match }) => {
  const [student, setStudent] = useState({});
  const [promotion, setPromotion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    fetchStudent();
    fetchPromotion();
  },[]);
  

  fetchStudent = async () => { 
    try {
      const response = await fetch( 
        `http://${homeIpAddr}:3000/api/v1/students/${match.params.id}`
      );
      const data = await response.json();
      setStudent(data);
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  };

  fetchPromotion = async () => { 
    try {
      const response = await fetch(
        `http://${homeIpAddr}:3000/api/v1/promotions/${match.params.id}`
      );
      const data = await response.json();
      setPromotion(data);
      setIsLoading(false);
    } catch (err) {
      console.log("The desired promotion failed to load", err);
    }
  };
    const now = moment();
    const then = moment(student.date_of_birth);
    const age = now.diff(then, "years");
    const lastPromotionDate = moment(promotion.createdAt);
    const daysSinceLastPromotion = now.diff(lastPromotionDate, "days");
    const color = String(promotion.belt_color).toLowerCase();
    const numOfStripes = promotion.stripes;
    const coachWhoPromoted = promotion.coach_who_promoted;
    const studentName = student.name;

    const promotionField = () => {
      if(coachWhoPromoted && lastPromotionDate) {
        return (
          <View>
            <Text style={styles.text}>{daysSinceLastPromotion} days since last promotion</Text>
            <Text style={styles.text}>
              Last promoted by {coachWhoPromoted}
            </Text>
          </View>
        )
      } else {
        return (
          <Text style={styles.text}>New Student. No promotions, yet.</Text>
        )
      }
    }

    const stripes = [...Array(4)].map((_, i) => (
      <View
        key={i}
        style={ numOfStripes > i ? styles.filled : { ...styles.stripe, backgroundColor: "black" } }
      ></View>
    )).reverse();

    return (
      <View>
        <View style={{ ...styles.container, backgroundColor: isLoading ? "black" : "white" }}>
          {isLoading 
            ? 
            <LoadingSpinner/>
            :
            <View style={styles.container}>
              <Text style={styles.nameText}>{studentName}</Text>
              <Image style={styles.image} source={placeHolderImage} />
              <BeltImage color={color} stripes={stripes}/>
            <Text style={styles.text}>{age} years old</Text>
            {promotionField()}
          </View>}
        </View>
        <View style={styles.button}>
          <NavButton />
        </View>
      </View>
    );
  }

export default withRouter(StudentListItem);