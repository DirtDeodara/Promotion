import React from 'react';
import { View } from 'react-native';
import Proptypes from 'prop-types';
import colorExtractor from '../../utils/colorExtractor';
import colorChecker from '../../utils/colorChecker';

const BeltColorIcon = ({ beltWidth, beltHeight, flexDirection, color}) => {  
  const [mainColor, secondaryColor] = colorExtractor(color); 
  return (
    <View style={{ flexDirection: flexDirection }}>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(mainColor) }}/>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(secondaryColor)}}/>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(mainColor)}}/>
    </View>
  )
}

BeltColorIcon.proptypes = {
  beltHeight: Proptypes.number.isRequired,
  beltWidth: Proptypes.number.isRequired,
  flexDirection: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired
}

export default BeltColorIcon;
