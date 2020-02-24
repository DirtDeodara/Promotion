import React, { useState } from 'react';
import { View, Text, Alert, CameraRoll } from 'react-native';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import DatePicker from '../DatePicker/DatePicker';
import NavButton from '../NavButton/NavButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import StripeInput from '../StripeInput/StripeInput';
import BeltPicker from '../BeltPicker/BeltPicker';
import { useStudent } from '../../hooks/student';
import { ipAddrToUse } from '../../data/ipAddresses';
import { backIcon, addStudentIcon, confirmEditIcon } from '../../utils/icons';
import styles from './editFormStyles';
import colorTextConverter from '../../utils/colorTextConverter';
const moment = require('moment');

const EditForm = ({ match, history }) => {
  const { student, setStudent, loading } = useStudent(match.params.id);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasEditted, setHasEditted] = useState(false);
  
    if(loading) {
      return (
        <View>
          <View style={styles.loadingContainer}>
            <LoadingSpinner />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',  height: 100, top: 10}}>
          <NavButton icon={confirmEditIcon} handleSubmit={editAlertHandler} hasEditted={hasEditted} hasSubmitted={hasSubmitted} />
          <NavButton icon={backIcon}/>
        </View>
        </View>
      )
    }
  
  const iterateStripes = () => {
    setHasEditted(true);
    setStudent((previousStudent) => ({
      ...previousStudent,
      promotions: {
        ...previousStudent.promotions,
        stripes: previousStudent.promotions.stripes < 4 ? previousStudent.promotions.stripes + 1 : 0
      }
    })
  )};

  const editAlertHandler = () => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        //title
        'Warning!',
        //body
        `Are you sure you want these changes? 
        Name: ${student.name}
        Date of birth: ${moment(student.date_of_birth).format('MMM/Do/YYYY')}
        Belt color: ${colorTextConverter(student.promotions.belt_color)}
        Number of stripes: ${student.promotions.stripes}
        `,
        [
          {text: 'Yes', onPress: () => handleSubmit().then(resolve)},
          {text: 'No', onPress: () => reject(), style: 'cancel'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
    })
  }

  const handleSubmit = () => {
    setHasSubmitted(true);
     return fetch(`http://${ipAddrToUse}:3000/api/v1/students/${student.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: student.name,
        date_of_birth: student.date_of_birth,
        belt_color: student.promotions.belt_color,
        stripes: student.promotions.stripes,
        studentId: student.id
      })
    })
    .then(() => setHasSubmitted(false))
  };

  return (
    <View>
        <View style={styles.container}>
          <Text>Student Name</Text>
          <TextField
            name='name'
            onChangeText={(name) => {
              setHasEditted(true);
              setStudent((previousStudent) => ({
                ...previousStudent,
                name
              }))
            }}
            value={student.name}
          />
          <Text>Birth Date</Text>
          <DatePicker
            dob={student.date_of_birth}
            changeDate={(date_of_birth) => {
              setHasEditted(true);
              setStudent((previousStudent) => ({
                ...previousStudent,
                date_of_birth
              }))
            }}
            style={{ margin: 10 }}
          />
          <Text>Belt Color</Text>
          <BeltPicker  
            selectedColor={student.promotions.belt_color} 
            setSelectedColor={(belt_color) => {
              setHasEditted(true);
              setStudent((previousStudent) => ({
                ...previousStudent,
                promotions: {
                  ...previousStudent.promotions,
                  belt_color
                }
              }))
            }}/>
          <Text>Number of Stripes</Text>
          <StripeInput count={student.promotions.stripes} iterateStripes={iterateStripes}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10 }}>
          <NavButton icon={confirmEditIcon} handleSubmit={editAlertHandler} hasEditted={hasEditted} hasSubmitted={hasSubmitted} />
          <NavButton icon={backIcon}/>
        </View>
      </View>
  )
}

export default EditForm;
