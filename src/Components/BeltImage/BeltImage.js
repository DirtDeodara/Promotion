import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from './beltImageStyles';

const BeltImage = ({ color, stripes }) => {
  const standInColor = "Yellow/White/Youth"; //TODO delete this and pass in 'color' again below on line 9

  const youthBelt = () => {
    const [maincolor, stripeColor] = standInColor.toLowerCase().split('/').slice(0, 2)
    return (
    <View style={{ flexDirection: "row"}}>
      <View name="main-belt" 
        style={{ ...styles.container,
          flexDirection: "column", 
          width: 210, 
          backgroundColor: maincolor }}>
          <View name="horizontal-stripe" style={{ width: 208, height: 10, backgroundColor: stripeColor, bottom: 10}}/>
      </View>
      <View name="stripe-bar" 
        style={{ 
          ...styles.container,
          flexDirection: "row", 
          justifyContent: "space-around", 
          width: 80, 
          backgroundColor: "black", 
          }}>
        {stripes}
      </View>
      <View name="end-cap" 
        style={{ ...styles.container,
          flexDirection: "column", 
          width: 10, 
          backgroundColor: maincolor }}>
          <View name="horizontal-stripe" style={{ width: 8, height: 10, backgroundColor: stripeColor, bottom: 10}}/>
      </View>
    </View>
    )
  }

  const adultBelt = () => {
    return (
      <View name="main-belt" 
      style={{ ...styles.container,
        flexDirection: "row", 
        width: 300, 
        backgroundColor: color === 'brown' ?  '#654321' : color }}>
      <View name="stripe-bar" 
        style={{ 
          ...styles.container,
          flexDirection: "row", 
          justifyContent: "space-around", 
          width: 80, 
          backgroundColor: "black", 
          marginRight: 10, 
          bottom: 9 }}>
        {stripes}
      </View>
    </View>
    )
  }

  

  if(color.length > 12){
    return youthBelt();
  } else {
    return adultBelt();
  }

//   <View name="main-belt" 
//   style={{ ...styles.container, 
//     width: 300, 
//     backgroundColor: color === 'brown' ?  '#654321' : color }}>
//   <View name="stripe-bar" 
//     style={{ 
//       ...styles.container, 
//       justifyContent: "space-around", 
//       width: 80, 
//       backgroundColor: "black", 
//       marginRight: 10, 
//       bottom: 9 }}>
//     {stripes}
//   </View>
// </View>
  
}

export default BeltImage;