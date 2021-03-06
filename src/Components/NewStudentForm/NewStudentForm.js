import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TextField from '../TextField/TextField';
import DatePicker from '../DatePicker/DatePicker';
import NavButton from '../NavButton/NavButton';
import styles from './newStudentFormStyles';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { schoolIpAddr, homeIpAddr, beziIpAddr } from '../../data/ipAddresses';

const NewStudentForm = () => {
  const [dob, setDOB] = useState(new Date());
  const [name, setName] = useState('');
  const [stripes, setStripes] = useState(0);

  iterateStripes = () => {
    setStripes(stripes < 4 ? stripes + 1 : 0);
  };

  const backIcon = () => {
    return <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>
  }
  const addStudentIcon = () => {
    return <MaterialIcons name="person-add" size={50} style={{ right: 2 }}/>
  }

   handleSubmit = async () => {
    const createStudentRes = await fetch(`http://${homeIpAddr}:3000/api/v1/students`, {
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
    
    fetch(`http://${homeIpAddr}:3000/api/v1/promotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId: student.id,
        belt_color: 'white',
        stripes: 0,
        coach_who_promoted: 'dirt'
      })
    })
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
            changeDate={setDOB}
            style={{ margin: 10 }}
          />
         
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
          <NavButton icon={addStudentIcon} handleSubmit={handleSubmit}/>
          <NavButton icon={backIcon}/>
        </View>
      </View>
  )
}

export default NewStudentForm;