import React, { useState } from 'react';
import { View, Text, CameraRoll, Button } from 'react-native';
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
  const [photos, setPhotos] = useState([]);
  // console.log(photos);

  iterateStripes = () => {
    setStripes(stripes < 4 ? stripes + 1 : 0);
  };


  // const _handleButtonPress = () => {
  //   console.log('button pressed');
  //   CameraRoll.getPhotos({
  //       first: 20,
  //       assetType: 'Photos',
  //     })
  //     .then(r => {
  //       setPhotos({ photos: r.edges });
  //     })
  //     .catch((err) => {
  //        //Error Loading Images
  //     });
  //   };



  // const imageDisplay = () => {
  //   return (
  //     <View>
  //       <Button title="Load Images" onPress={_handleButtonPress} />
  //       <ScrollView>
  //         {photos.map((p, i) => {
  //         return (
  //           <Image
  //             key={i}
  //             style={{
  //               width: 280,
  //               height: 100,
  //             }}
  //             source={{ uri: p.node.image.uri }}
  //           />
  //         );
  //       })}
  //       </ScrollView>
  //     </View>
  //   );
  // }

   handleSubmit = async () => {
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
         {/* {imageDisplay()} */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, marginBottom: 10 }}>
          <NavButton icon={addStudentIcon} handleSubmit={handleSubmit}/>
          <NavButton icon={backIcon}/>
        </View>
      </View>
  )
}

export default NewStudentForm;