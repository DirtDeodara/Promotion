import React from "react";
import { Picker, View } from "react-native";
import PropTypes from 'prop-types';
import colors from '../../data/beltColors';
import beltColortext from '../../utils/colorTextConverter';

const BeltPicker = ({ selectedColor, setSelectedColor }) => {
  
  return (
    <View
      style={{
        width: 200,
        height: 48,
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white',
      }}
    >
      <Picker
        accessible={true}
        accessibilityLabel="choose a belt color from this drop down menu"
        selectedValue={selectedColor}
        style={{
          height: 40,
          left: 20,
          width: 170
        }}
        onValueChange={setSelectedColor}
      >
        {colors.map(color => {
          return <Picker.Item label={beltColortext(color)} value={color} key={color} />;
        })}
      </Picker>
    </View>
  );
}

BeltPicker.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired
}
export default BeltPicker;