import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import DatePicker from '../DatePicker/DatePicker';
import NavButton from '../NavButton/NavButton';
import styles from './newStudentFormStyles';
import { ipAddrToUse } from '../../data/ipAddresses';
import { backIcon, addStudentIcon } from '../../utils/icons';

const NewStudentForm = () => {
  const [dob, setDOB] = useState(new Date());
  const [name, setName] = useState('');
  const [stripes, setStripes] = useState(0);
  const [hasSubmitted , setHasSubmitted] = useState(false);

  iterateStripes = () => {
    setStripes(stripes < 4 ? stripes + 1 : 0);
  };

   handleSubmit = async () => {
    setHasSubmitted(true);
    const createStudentRes = await fetch(`http://${ipAddrToUse}:3000/api/v1/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        date_of_birth: dob,
        gym: "Straight Blast Gym"
      }),
    });

    const student = await createStudentRes.json();
    
    fetch(`http://${ipAddrToUse}:3000/api/v1/promotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId: student.id,
        belt_color: 'white-white-white',
        stripes: 0,
        coach_who_promoted: 'dirt'
      })
    })
    .then(setHasSubmitted(false))
  };

  return (
    <View>
        <View style={styles.container}>
          <Text>Student Name</Text>
          <TextField
            name="name"
            onChangeText={setName}
            value={name}
            maxLength={35}
          />
          <Text>Birth Date</Text>
          <DatePicker
            dob={dob}
            changeDate={(dob) => setDOB(dob)}
            style={{ margin: 10 }}
          />
         {/* {imageDisplay()} */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
          <NavButton hasSubmitted={hasSubmitted} icon={addStudentIcon} handleSubmit={handleSubmit}/>
          <NavButton icon={backIcon}/>
        </View>
      </View>
  )
}

export default NewStudentForm;
