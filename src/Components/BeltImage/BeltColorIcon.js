import React from 'react';
import { View } from 'react-native';
import colorExtractor from '../../utils/colorExtractor';
import colorChecker from '../../utils/colorChecker';

export default ({ beltWidth, beltHeight, flexDirection, color}) => {  
  const [mainColor, secondaryColor] = colorExtractor(color); 
  return (
    <View style={{ flexDirection: flexDirection }}>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(mainColor) }}/>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(secondaryColor)}}/>
      <View style={{ width: beltWidth, height: beltHeight, backgroundColor: colorChecker(mainColor)}}/>
    </View>
  )
}