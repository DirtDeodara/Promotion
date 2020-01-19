import React from "react";
import { StyleSheet, View } from "react-native";
import styles from './beltImageStyles';

const BeltImage = ({ color, stripes, beltWidth, barWidth }) => {
  return (
    <View name="main-belt" style={{ ...styles.container, width: beltWidth, backgroundColor: color === 'brown' ?  '#654321' : color }}>
      <View name="stripe-bar" 
        style={{ 
          ...styles.container, 
          justifyContent: "space-around", 
          width: barWidth, 
          backgroundColor: "black", 
          marginRight: 10, 
          bottom: 9 }}>
        {stripes}
      </View>
    </View>
  )
}

export default BeltImage;