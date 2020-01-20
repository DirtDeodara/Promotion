import React from "react";
import { Picker, View } from "react-native";
import styles from './beltPickerStyles';
import colors from '../../data/colors';

function BeltPicker({ color, selectColor }) {
  
  return (
    <View
      style={styles.container}
    >
      <Picker
        accessible={true}
        accessibilityLabel="choose a belt color from this drop down menu"
        selectedValue={color}
        style={{
          height: 40
        }}
        onValueChange={selectColor}
      >
        {colors.map(v => {
          return <Picker.Item label={v} value={v} key={v} />;
        })}
      </Picker>
    </View>
  );
}
export default BeltPicker;
