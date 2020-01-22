import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './studentItemListStyles';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchStudent } from '../../services/studentsApi';
import { fetchPromotion } from '../../services/promotionsApi';
const moment = require("moment");
const placeHolderImage = require("../../../assets/a.jpg"); //TODO this is just a placeholer!!
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.82`;

const StudentListItem = ({ match }) => {
  const [student, setStudent] = useState({});
  const [promotion, setPromotion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasBeenPromoted, setHasBeenPromoted] = useState(false);
  const [pendingAmountOfStripes, setPendingAmountOfStripes] = useState(0)
  console.log(pendingAmountOfStripes);
  console.log(hasBeenPromoted);
  
  useEffect(() => {
    fetchStudent(match.params.id, setStudent);
    fetchPromotion(match.params.id, setPromotion, setIsLoading);
  },[]);

  const promoteIcon = () => <MaterialCommunityIcons name="trophy-award" size={50} style={{ right: 4, bottom: 5 }} color={hasBeenPromoted ? "gold" : "black"}/>
  const backIcon = () => <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>;

  const now = moment();
  const then = moment(student.date_of_birth);
  const age = now.diff(then, "years");
  const lastPromotionDate = moment(promotion.createdAt);
  const daysSinceLastPromotion = now.diff(lastPromotionDate, "days");
  const color = String(promotion.belt_color).toLowerCase();
  const numOfStripes = hasBeenPromoted ? pendingAmountOfStripes: promotion.stripes;
  const coachWhoPromoted = promotion.coach_who_promoted;
  const studentName = student.name;

  const handleSubmit = async () => {
    fetch(`http://${homeIpAddr}:3000/api/v1/promotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId: student.id,
        belt_color: promotion.belt_color,
        stripes: pendingAmountOfStripes,
        coach_who_promoted: 'dirt'
      })
    })
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
            <TouchableOpacity 
              onPress={() => {
                setPendingAmountOfStripes(promotion.stripes + 1);
                setHasBeenPromoted(true)
              }}
              style={{ 
                borderColor: hasBeenPromoted ? "gold" : "black",
                backgroundColor: hasBeenPromoted ? "black" : "white",
                borderWidth: 4, 
                width: 50, 
                height: 50, 
                borderRadius: 30, 
                top: 5 }}>
                {promoteIcon()}
              </TouchableOpacity>
            <BeltImage color={color} stripes={stripes}/>
            <Text style={styles.text}>{age} years old</Text>
            <Text style={styles.text}>{daysSinceLastPromotion} days since last promotion</Text>
            <Text style={styles.text}>Last promoted by {coachWhoPromoted}</Text>
          </View>}
      </View>
      <View style={styles.button}>
        <NavButton icon={backIcon} handleSubmit={handleSubmit}/>
      </View>
    </View>
  );
}

export default withRouter(StudentListItem);