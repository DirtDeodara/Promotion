import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

function TextField(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    width: 80,
    height: 80,
    color: "black",
    backgroundColor: "skyblue",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 40,
  }
});

export default TextField;
