import React from "react";
import { StyleSheet, View } from "react-native";

const BeltImage = ({ color, stripes }) => {
  return (
    <View name="main-belt" style={{ ...styles.container, backgroundColor: color }}>
      <View name="stripe-bar" 
        style={{ 
          ...styles.container, 
          justifyContent: "space-around", 
          width: 80, 
          backgroundColor: "black", 
          marginRight: 10, 
          bottom: 9 }}>
        {stripes}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 30,
    width: 300,
    marginTop: 8,
    borderColor: "black",
    borderWidth: 1
  }
})

export default BeltImage;