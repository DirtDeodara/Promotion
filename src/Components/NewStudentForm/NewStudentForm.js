import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ImagePicker from '../ImagePicker/ImagePicker';
import TextField from '../TextField/TextField';
import DatePicker from '../DatePicker/DatePicker';
import NavButton from '../NavButton/NavButton';
import styles from './newStudentFormStyles';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { ipAddrToUse } from '../../data/ipAddresses';
import { backIcon, addStudentIcon } from '../../utils/icons';
import { useStudentInfo } from '../../hooks/createStudent';

const NewStudentForm = () => {
  const { uploadPhoto, dob, setDOB, name, setName, image, setImage, stripes, setStripes} = useStudentInfo();
  const [hasSubmitted , setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading) return (
    <View> 
      <View style={{ ...styles.container, backgroundColor: 'black' }}>
        <LoadingSpinner />
      </View>
      <View style={{...styles.button}}>
      </View>
    </View>
  )

  iterateStripes = () => {
    setStripes(stripes < 4 ? stripes + 1 : 0);
  };

   handleSubmit = async () => {
    setHasSubmitted(true);
    setIsLoading(true);
    const imageUrl = await uploadPhoto();
    console.log(imageUrl)
    const createStudentRes = await fetch(`http://${ipAddrToUse}:3000/api/v1/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        date_of_birth: dob,
        gym: "Straight Blast Gym",
        image_url: imageUrl
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
    .then(setIsLoading(false));

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
            style={{  }}
          />
          <ImagePicker image={image} setImage={setImage}/>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
          <NavButton hasSubmitted={hasSubmitted} icon={addStudentIcon} handleSubmit={handleSubmit}/>
          <NavButton icon={backIcon}/>
        </View>
      </View>
  )
}

export default NewStudentForm;
