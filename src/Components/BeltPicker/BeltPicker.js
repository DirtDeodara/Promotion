import React from "react";
import { Picker, View } from "react-native";
import colors from '../../data/colors'

function BeltPicker({ color, selectColor }) {
  
  return (
    <View
      style={{
        width: 200,
        height: 48,
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: 10
      }}
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
