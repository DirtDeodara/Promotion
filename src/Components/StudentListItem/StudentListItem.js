import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { withRouter } from 'react-router-native';
import NavButton from "../../Components/NavButton/NavButton";
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
        `http://${schoolIpAddr}:3000/api/v1/students/${match.params.id}`
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
        `http://${schoolIpAddr}:3000/api/v1/promotions/${match.params.id}`
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

    const loadingGif = require('../../../assets/hex.gif');
    const LoadingSpinner = <Image style={{ height: 100, width: 100}} source={loadingGif} />

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
            LoadingSpinner
            :
            <View style={styles.container}>
              <Text style={styles.nameText}>{studentName}</Text>
              <Image style={styles.image} source={placeHolderImage} />
              <View style={{ ...styles.belt, backgroundColor: color }}>
                <View style={{ ...styles.belt, justifyContent: "space-around", width: 80, backgroundColor: "black", marginRight: 10, bottom: 9 }}>
                  {stripes}
                </View>
              </View>
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


const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 25,
    marginBottom: 20
  },
  text: {
    fontSize: 20
  },
  image: {
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    width: 200,
    height: 200
  },
  button: {
    width: 346,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  belt: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 30,
    width: 300,
    marginTop: 8,
    borderColor: "black",
    borderWidth: 1
  },
  stripe: {
    width: 10,
    height: 28,
    borderWidth: 1,
    borderColor: "black"
  },
  filled: {
    width: 8,
    height: 28,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "white"
  }
});

export default withRouter(StudentListItem);