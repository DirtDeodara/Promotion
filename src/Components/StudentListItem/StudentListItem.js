import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PromotionButtons from '../PromotionButtons/PromotionButtons';
import styles from './studentItemListStyles';
import { AntDesign } from "@expo/vector-icons";
const moment = require("moment");
const placeHolderImage = require("../../../assets/a.jpg"); //TODO this is just a placeholer!!
import { schoolIpAddr, homeIpAddr } from '../../data/ipAddresses';
import { useStudent } from '../../hooks/student';
import { usePromotion, usePromoteStudent } from '../../hooks/promotion';

const StudentListItem = ({ match }) => {
  const { student, loading, promoteStripe, promoteBelt } = useStudent(match.params.id);
  const { promotions } = student;
  const [promotionType, setPromotionType] = useState(null);

  const backIcon = () => <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>;

  const now = moment();

  const studentName = student.name;
  const age = now.diff(moment(student.date_of_birth), "years");

  const color = promotion.belt_color;
  const coachWhoPromoted = promotion.coach_who_promoted;
  const numOfStripes = promotion.stripes;
  const daysSinceLastPromotion = now.diff(moment(promotion.createdAt), "days")
  const handleSubmit = async () => {
    if(promotionType === 'strip') promoteStripe();
    if(promoteType === 'belt') promoteBelt();
    // send to previous page
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
