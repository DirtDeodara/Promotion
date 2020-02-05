import React from 'react';
import { View } from 'react-native';
import colorExtractor from '../../utils/colorExtractor';
import colorChecker from '../../utils/colorChecker';

export default ({ beltwidth, beltheight, flexDirection, mainColor, secondaryColor }) => {  
  // const [mainColor, secondaryColor] = colorExtractor('black-red-black'); //TODO maybe i want to use this here and only pass in color as props
  return (
    <View style={{ flexDirection: flexDirection }}>
      <View style={{ width: beltwidth, height: beltheight, backgroundColor: colorChecker(mainColor) }}/>
      <View style={{ width: beltwidth, height: beltheight, backgroundColor: colorChecker(secondaryColor)}}/>
      <View style={{ width: beltwidth, height: beltheight, backgroundColor: colorChecker(mainColor)}}/>
    </View>
  )
}