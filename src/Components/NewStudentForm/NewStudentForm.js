import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TextField from '../TextField/TextField';
import DatePicker from '../DatePicker/DatePicker';
import BeltPicker from '../BeltPicker/BeltPicker';
import Stripes from '../Stripes/Stripes';
import NavButton from '../NavButton/NavButton';
import styles from './newStudentFormStyles';
import { fetchNewestStudent } from '../../services/studentsApi';
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.82`;

const NewStudentForm = () => {
  const [dob, setDOB] = useState(new Date());
  const [name, setName] = useState('');
  const [color, setColor] = useState('White');
  const [stripes, setStripes] = useState(0);
  const [gym, setGym] = useState('Stright Blast Gym'); //TODO eventually this will need a different default state when other gyms start to use it.
  const [student, setStudent] = useState({});

  iterateStripes = () => {
    setStripes(stripes < 4 ? stripes + 1 : 0);
  };

  // handleSubmit = () => {
  //   fetch(`http://${homeIpAddr}:3000/api/v1/students`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       date_of_birth: dob,
  //       gym: gym
  //     }),
  //   });
  // };

  handleSubmit = async() => {
    await fetch(`http://${homeIpAddr}:3000/api/v1/students`, {
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

    const student = await fetchNewestStudent();
    console.log(student)

    await fetch(`http://${homeIpAddr}:3000/api/v1/promotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        studentId: student.id,
        belt_color: 'white',
        stripes: 0,
        coach_who_promoted: 'dirt'
      }
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
          />
          <Text>Birth Date</Text>
          <DatePicker
            dob={dob}
            changeDate={setDOB}
            style={{ margin: 10 }}
          />
          {/* <Text>Belt Color</Text>
          <BeltPicker color={color} selectColor={setColor} />
          <Text>Stripes</Text>
          <Stripes
            iterateStripes={iterateStripes}
            count={stripes}
          /> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
          <NavButton handleSubmit={handleSubmit} />
          <NavButton />
        </View>
      </View>
  )
}

export default NewStudentForm;