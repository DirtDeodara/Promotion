import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PromotionButtons from '../PromotionButtons/PromotionButtons';
import styles from './studentDetailStyles';
import { AntDesign, Ionicons } from "@expo/vector-icons";
const moment = require("moment");
const placeHolderImage = require("../../../assets/a.jpg"); //TODO this is just a placeholer!!

import { useStudent } from '../../hooks/student';

const StudentDetail = ({ match }) => {
  const { student, loading, promoteStripe, promoteBelt } = useStudent(match.params.id);
  const [promotionType, setPromotionType] = useState(null);
  if(loading) return (
    <View> 
      <View style={{ ...styles.container, backgroundColor: "black", bottom: 50 }}>
        <LoadingSpinner />
      </View>
    </View>
  )

  const backIcon = () => <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>;
  const addIcon = () => <Ionicons name="md-add" size={65}/>;

  const now = moment();

  const age = now.diff(moment(student.date_of_birth), "years");
    console.log('studentListItem', student);
  const beltColor = promotionType === 'belt' ? student.nextBeltColor: student.promotions.belt_color;
  const coachWhoPromoted = student.promotions.coach_who_promoted;
  const numOfStripes = promotionType === 'stripe' ? student.promotions.stripes + 1 : student.promotions.stripes;
  const daysSinceLastPromotion = now.diff(moment(student.promotions.createdAt), "days")

  const handleSubmit = async () => {
    if(promotionType === 'stripe') return promoteStripe();
    if(promotionType === 'belt') return promoteBelt();
  }

  return (
    <View>
      <View style={{ ...styles.container, backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={styles.nameText}>{student.name}</Text>
          <Text style={styles.text}>{age} years old</Text>
          <Image style={styles.image} source={placeHolderImage} />
          <View>
            <PromotionButtons
              promotionType={promotionType}
              setPromotionType={setPromotionType}
            />
          </View>
          <BeltImage color={beltColor} stripes={numOfStripes} promotionType={promotionType}/>
          <Text style={styles.text}>Last striped by {coachWhoPromoted} {daysSinceLastPromotion} days ago</Text>
        </View>
      </View>
      <View style={styles.button}>
        <NavButton icon={promotionType ? addIcon : backIcon} handleSubmit={promotionType ? handleSubmit : null}/>
      </View>
    </View>
  );
}

export default withRouter(StudentDetail);
