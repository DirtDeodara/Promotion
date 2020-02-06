import React from "react";
import PropTypes from 'prop-types';
import { View } from "react-native";
import styles from './beltImageStyles';
import colorChecker from '../../utils/colorChecker';
import colorExtractor from '../../utils/colorExtractor';
import BeltColorIcon from "./BeltColorIcon";


const BeltImage = ({ color, stripes, promotionType }) => {
  const numOfStripes = promotionType === 'belt' ? 0 : stripes;
  const stripeElements = [...Array(4)].map((_, i) => (
    <View
      key={i}
      style={ numOfStripes > i ? styles.filled : { ...styles.stripe, backgroundColor: "black" } }
    ></View>
  )).reverse();

  // const [mainColor, secondaryColor] = colorExtractor(color);

  return (
  <View style={{ flexDirection: "row"}}>
    <View name="main-belt" style={styles.container}>
      <BeltColorIcon  
        beltWidth={208} 
        beltHeight={10} 
        flexDirection={'column'} 
        color={color}
        />
    </View>
    <View name="stripe-bar" 
      style={styles.stripeBar}>
      {stripeElements}
    </View>
    <View name="end-cap" style={styles.container}>
      <BeltColorIcon  
        beltWidth={8} beltHeight={10} 
        flexDirection={'column'} 
        color={color}
        />
    </View>
  </View>
  )
}

BeltImage.propTypes = {
  color: PropTypes.string.isRequired, 
  stripes: PropTypes.number, 
  promotionType: PropTypes.string
};

export default BeltImage;