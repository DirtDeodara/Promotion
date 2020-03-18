import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';
import NavButton from '../../Components/NavButton/NavButton';
import BeltImage from '../BeltImage/BeltImage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PromotionButtons from '../PromotionButtons/PromotionButtons';
import styles from './studentDetailStyles';
import { backIcon, addIcon, deleteIcon, editIcon } from '../../utils/icons';
import { useStudent } from '../../hooks/student';
import { ipAddrToUse } from '../../data/ipAddresses';
const moment = require('moment');
const placeHolderImage = require('../../../assets/a.jpg'); //TODO this is just a placeholer!!

const StudentDetail = ({ match, history }) => {
  const { student, loading, promoteStripe, promoteBelt } = useStudent(match.params.id);
  const [promotionType, setPromotionType] = useState(null);
  console.log({student})

  if(loading) return (
    <View> 
      <View style={{ ...styles.container, backgroundColor: 'black' }}>
        <LoadingSpinner />
      </View>
      <View style={{...styles.button}}>
        <NavButton icon={promotionType ? addIcon : backIcon} handleSubmit={promotionType ? handleSubmit : null}/>
      </View>
    </View>
  )

  const now = moment();
  const age = now.diff(moment(student.date_of_birth), 'years');
  const beltColor = promotionType === 'belt' ? student.nextBeltColor : student.promotions.belt_color;
  const numOfStripes = promotionType === 'stripe' ? student.promotions.stripes + 1 : student.promotions.stripes;
  const daysSinceLastPromotion = now.diff(moment(student.promotions.createdAt), 'days')

  const handleSubmit = async () => {
    if(promotionType === 'stripe') return promoteStripe();
    if(promotionType === 'belt') return promoteBelt();
  }

  const deleteAlertHandler = () => {
    Alert.alert(
      //title
      'Warning!',
      //body
      `Are you sure you want to delete ${student.name.toUpperCase()} from the database?`,
      [
        {text: 'Yes', onPress: handleDelete},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  const handleDelete = () => {
    return fetch(`http://${ipAddrToUse}:3000/api/v1/students/${student.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(history.goBack())
  }

  const handlePressEdit = () => {
    history.push(`/editForm/${student.id}`);
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity 
          name='deleteButton'
          onPress={deleteAlertHandler}
          style={{ position: 'absolute', top: 7, left: 7 }}>
          {deleteIcon}
        </TouchableOpacity>
        <TouchableOpacity 
          name='editButton'
          onPress={handlePressEdit}
          style={{ position: 'absolute', top: 10, left: 295 }}>
          {editIcon}
        </TouchableOpacity>
        <Text name='student-name' style={styles.nameText}>{student.name}</Text>
        <Text name='student-age'style={styles.text}>{age} years old</Text>
        <Image name='student-image'style={styles.image} source={{ uri: student.image_url }} />
        <View>
          <PromotionButtons
            promotionType={promotionType}
            setPromotionType={setPromotionType}
          />
        </View>
        <BeltImage color={beltColor} stripes={numOfStripes} promotionType={promotionType}/>
        <Text name='last-promotion-info'style={styles.text}>Last striped by {student.promotions.coach_who_promoted} {daysSinceLastPromotion} days ago</Text>
      </View>
      <View style={styles.button}>
        <NavButton icon={promotionType ? addIcon : backIcon} handleSubmit={promotionType ? handleSubmit : null}/>
      </View>
    </View>
  );
}

StudentDetail.proptypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(StudentDetail);
