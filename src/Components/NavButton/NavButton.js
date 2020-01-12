import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";

function NavButton(props) {
  const history = useHistory();
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.handleSubmit && props.handleSubmit()
          history.push(props.link)
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 70,
    height: 70,
    color: "black",
    backgroundColor: "#157DAC",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 35,
    marginBottom: 10
  }
});

export default NavButton;
