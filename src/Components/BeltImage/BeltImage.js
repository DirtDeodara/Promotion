import React from "react";
import { View } from "react-native";
import styles from './beltImageStyles';

const BeltImage = ({ color, stripes, promotionType }) => {
  const numOfStripes = promotionType === 'belt' ? 0 : stripes;
  const stripeElements = [...Array(4)].map((_, i) => (
    <View
      key={i}
      style={ numOfStripes > i ? styles.filled : { ...styles.stripe, backgroundColor: "black" } }
    ></View>
  )).reverse();

  const belt = () => {
    const [maincolor, stripeColor] = color.split('/').slice(0, 2)
    console.log(maincolor,stripeColor)
    return (
    <View style={{ flexDirection: "row"}}>
      <View name="main-belt" 
        style={{ ...styles.container,
          flexDirection: "column", 
          width: 210, 
          backgroundColor: maincolor }}>
          <View name="horizontal-stripe" style={{ width: 208, height: 11, backgroundColor: stripeColor, bottom: 9}}/>
      </View>
      <View name="stripe-bar" 
        style={{ 
          ...styles.container,
          flexDirection: "row", 
          justifyContent: "space-around", 
          width: 80, 
          backgroundColor: "black", 
          }}>
        {stripeElements}
      </View>
      <View name="end-cap" 
        style={{ ...styles.container,
          flexDirection: "column", 
          width: 10, 
          backgroundColor: maincolor }}>
          <View name="horizontal-stripe" style={{ width: 8, height: 11, backgroundColor: stripeColor, bottom: 9}}/>
      </View>
    </View>
    )
  }

  
  return belt();
  
}

export default BeltImage;