import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Burger = ({ handleTouch }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleTouch()}>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
      {/* <Text style={styles.text}>Hello</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 30,
    marginBottom: 10,
    left: 140,
  },
  text: {
    fontSize: 50,
  },
  lines: {
    width: 35,
    height: 5,
    borderRadius: 10,
    backgroundColor: "black"
    
  }
})

export default Burger;