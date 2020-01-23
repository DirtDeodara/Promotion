import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PromotionButtons from '../PromotionButtons/PromotionButtons';
import styles from './studentItemListStyles';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchStudent } from '../../services/studentsApi';
import { fetchPromotion } from '../../services/promotionsApi';
import { youthBelts, adultBelts } from '../../data/beltTypes';
const moment = require("moment");
const placeHolderImage = require("../../../assets/a.jpg"); //TODO this is just a placeholer!!
import { schoolIpAddr, homeIpAddr } from '../../data/ipAddresses';

const StudentListItem = ({ match }) => {
  const [student, setStudent] = useState({});
  const [promotion, setPromotion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasBeenPromoted, setHasBeenPromoted] = useState(false);
  const [hasBeenStriped, setHasBeenStriped] = useState(false);
  const [pendingAmountOfStripes, setPendingAmountOfStripes] = useState(0);
  const [newBeltColor, setNewBeltColor] = useState('White');
  
  useEffect(() => {
    fetchStudent(match.params.id, setStudent);
    fetchPromotion(match.params.id, setPromotion, setIsLoading);
    setHasBeenStriped(false)
  },[]);

  const backIcon = () => <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>;

  const now = moment();
  const then = moment(student.date_of_birth);
  const age = now.diff(then, "years");
  const lastPromotionDate = moment(promotion.createdAt);
  const daysSinceLastPromotion = now.diff(lastPromotionDate, "days");
  const color = String(promotion.belt_color).toLowerCase();
  const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
  const numOfStripes = hasBeenStriped ? pendingAmountOfStripes : promotion.stripes;
  const coachWhoPromoted = promotion.coach_who_promoted;
  const studentName = student.name;

  const handleSubmit = async () => {
    fetch(`http://${schoolIpAddr}:3000/api/v1/promotions`, {
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
  console.log(promotion.belt_color);

  const addStripe = () => {
    console.log(promotion)
    setHasBeenStriped(!hasBeenStriped); 
    setPendingAmountOfStripes(promotion.stripes + 1); //TODO i dont know why this works. i wouldnt think it would remove a stripe
  }

  const changeBeltColor = (newColor) => {
    setHasBeenPromoted(!hasBeenPromoted);
    setNewBeltColor(newColor)
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
            <Text style={styles.text}>{age} years old</Text>
            <Image style={styles.image} source={placeHolderImage} />
            <View>
              <PromotionButtons 
                setHasBeenStriped={setHasBeenStriped}
                hasBeenStriped={hasBeenStriped}
                hasBeenPromoted={hasBeenPromoted} 
                addStripe={addStripe} 
                color={color} 
                studentAge={age} 
                selectColor={setNewBeltColor}
                changeBeltColor={changeBeltColor}/>
            </View>
            <BeltImage color={color} stripes={stripes}/>
            <Text style={styles.text}>Last striped by {coachWhoPromoted} {daysSinceLastPromotion} days ago</Text>
          </View>}
      </View>
      <View style={styles.button}>
        <NavButton icon={backIcon} handleSubmit={hasBeenPromoted ? handleSubmit : null}/>
      </View>
    </View>
  );
}

export default withRouter(StudentListItem);