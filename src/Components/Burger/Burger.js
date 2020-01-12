import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Burger = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
      {/* <Text style={styles.text}>Hello</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 25,
    marginBottom: 10,
    right: 15,
    borderWidth: 1,
  },
  text: {
    fontSize: 50,
  },
  lines: {
    width: 30,
    height: 4,
    borderRadius: 10,
    backgroundColor: "black"
    
  }
})

export default Burger;