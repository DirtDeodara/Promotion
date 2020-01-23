import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import BeltPicker from "../BeltPicker/BeltPicker";
import { youthBelts, adultBelts } from '../../data/beltTypes';

const PromotionButtons = ({ color, studentAge, selectColor, addStripe, hasBeenStriped, hasBeenPromoted, changeBeltColor }) => {
  
  console.log('hasBeenStriped in PromotionButtons.js', hasBeenStriped)

  const addStripeButton = <MaterialCommunityIcons name="reorder-vertical" color={hasBeenStriped ? "gold" : "black"} size={45} style={{ alignSelf: "center", top: 2 }}/>;

  const promoteBeltButton =  <MaterialCommunityIcons name="trophy-outline" color="white" size={40} style={{ alignSelf: "center", top: 8 }}/>

  const colorOptions = studentAge < 12 ? youthBelts : adultBelts;
  const indexOfCurrentColor = studentAge < 12 ? youthBelts.indexOf(color) : adultBelts.indexOf(color);
  const colorToPromoteTo = colorOptions[indexOfCurrentColor + 1] ? colorOptions[indexOfCurrentColor + 1].toLowerCase() : "black";
  // console.log(color);
  // console.log(indexOfCurrentColor);
  return (
    <View style={{ ...styles.container }}>

      <TouchableOpacity 
        onPress={addStripe}
        style={{ ...styles.stripeButton, 
          borderColor: hasBeenStriped ? "gold" : "black", 
          backgroundColor: hasBeenStriped ? "black" : "white"
        }}
        >
        {addStripeButton}
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={changeBeltColor}
        style={{ ...styles.promoteBeltButton, 
          backgroundColor: colorToPromoteTo === 'brown' ?  '#654321' : colorToPromoteTo
        }}
      >
       {promoteBeltButton}
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
    height: 70,
    marginTop: 10
  },
  stripeButton: { 
    borderWidth: 4, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    top: 5 
  },
  promoteBeltButton: {
    width: 60, 
    height: 60, 
    borderWidth: 2, 
    borderRadius: 30, 
    alignSelf: "center"
  }
});

export default PromotionButtons;
