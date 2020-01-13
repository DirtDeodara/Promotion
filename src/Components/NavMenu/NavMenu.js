import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NavMenu = ({ handleTouch, position }) => {

  return (
    <TouchableOpacity
      onPress={() => handleTouch()}
      style={{
        ...styles.container,
        borderWidth: 3,
        transform: [{ 
          translateX: position.isOpen ? 85 : 280,
        }]
      }}
    >
      <TouchableOpacity
        style={{ ...styles.container, flexDirection: "column", top: 60 }}
        onPress={() => handleTouch()}
      >
        <TouchableOpacity>
          <Text style={styles.text}>Student List</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Add Student</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Student List</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 650,
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.8,
    marginBottom: 20,
  },
  text: {
    width: 200,
    color: "red",
    fontSize: 25,
    marginTop: 15,
    paddingLeft: 30,
    height: 40
  },
  tab: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    right: 50,
    bottom: 300
  }
});

export default NavMenu;
