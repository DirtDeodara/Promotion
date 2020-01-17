import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { AntDesign } from "@expo/vector-icons";

function NavButton(props) { //TODO destructure handleSubmit
  const history = useHistory();
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.handleSubmit && props.handleSubmit()
          history.goBack()
        }}
        style={styles.button}
      >
        <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
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
