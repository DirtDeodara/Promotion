import React from "react";
import { Picker, View } from "react-native";
import styles from './beltPickerStyles';
import colors from '../../data/colors';

function BeltPicker({ color, selectColor, colorOptions }) {
  
  return (
    <View style={styles.container}>
      <Picker
        accessible={true}
        accessibilityLabel="choose a belt color from this drop down menu"
        selectedValue={color}
        style={{
          height: 40
        }}
        onValueChange={selectColor}
      >
        {colorOptions.map(value => {
          return <Picker.Item label={value} value={value} key={value} />;
        })}
      </Picker>
    </View>
  );
}
export default BeltPicker;
