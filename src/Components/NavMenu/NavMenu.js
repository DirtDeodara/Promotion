import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NavMenu = (handleDrawer) => {
  const [position, setPosition] = useState({ isOpen: false });

  const handleTouch = () => {
    setPosition({ isOpen: !position.isOpen })
    console.log(position)
  }
  return (
    <View style={{ ...styles.container,
      transform: [
        { translateX: position.isOpen ? 320 : 155 },
        { translateY: 12 }
      ]
       }} >
      <TouchableOpacity style={styles.linkContainer} onPress={() => handleTouch()}>
        <TouchableOpacity>
          <Text style={styles.text}>Student List</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Add Student</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Student List</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Add Student</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Student List</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Add Student</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // flex: 1,
    height: 650,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "white",
    opacity: .8,
   
  },
  linkContainer: {
    flex: 1,
    position: "absolute",
    // flex: 1,
    height: 650,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "white",
    opacity: .8,
    top: 60,
    // right: 20,
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  text: {
    width: 200,
    color: "red",
    fontSize: 25,
    marginTop: 15,
    borderWidth: 1,
    paddingLeft: 30,
    height: 40
  }
});


export default NavMenu;
