import React from "react";
import { withRouter } from 'react-router-native';
import { View, Text, TouchableOpacity } from "react-native";
import BeltImage from '../BeltImage/BeltImage';
import styles from './drawerMenuStyles';
import { AntDesign } from "@expo/vector-icons";
import colors from '../../data/colors';

const DrawerMenu = ({ handleTouch, position, history }) => {
  const listOfLinks = colors.map((color, i) => {
    const [firstColor, secondColor] = color.toLowerCase().split('-').slice(0, 2);
    console.log('draweMenu', firstColor, secondColor)
    const colorText = color.length < 13 ? color : `${firstColor}/${secondColor}`;
    return (
      <TouchableOpacity 
        key={i} 
        onPress={() => {
         history.push(`/studentList/${color}`);
        }}
        style={{ flexDirection: "column", borderWidth: 2 }}
        >
        <View style={{ width: 180, height: 10, backgroundColor: firstColor }}/>
        <View style={{ width: 180, height: 10, backgroundColor: secondColor }}/>
        <View style={{ width: 180, height: 10, backgroundColor: firstColor }}/>
        
        {/* <Text style={styles.link}>{`${colorText} belts`}</Text> */}
      </TouchableOpacity>
    )
  });

  return (
    <TouchableOpacity
      onPress={() => handleTouch()}
      style={{
        ...styles.container,
        borderWidth: 3,
        transform: [{ 
          translateX: position.isOpen ? 85 : 280,
        }]
      }}
      >
      <AntDesign name="close" size={45} style={{ paddingLeft: 110 }}/>
      <TouchableOpacity onPress={() => history.push('/newStudentForm')}>
        <Text style={styles.link}>New Student Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Text style={styles.link}>All Students</Text>
      </TouchableOpacity>
      {listOfLinks}
    </TouchableOpacity>
  );
};

export default withRouter(DrawerMenu);
