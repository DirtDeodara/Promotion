import React from "react";
import { withRouter } from 'react-router-native';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from '../../data/colors';

const NavMenu = ({ handleTouch, position, history }) => {
  const listOfLinks = colors.map((color, i) => {
    return (
      <TouchableOpacity key={i} onPress={() => {
        history.push(`/studentList/${color}`);
      }}>
        <Text style={styles.link}>{`${color} belts`}</Text>
      </TouchableOpacity>
    )
  });

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
      <AntDesign name="close" size={45} style={{ paddingLeft: 110 }}/>
      <TouchableOpacity onPress={() => history.push('/form')}>
        <Text style={styles.link}>New Student Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Text style={styles.link}>All Students</Text>
      </TouchableOpacity>
      {listOfLinks}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 650,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    // opacity: 1,
    marginBottom: 20,
    paddingTop: 24,
    paddingBottom: 30
  },
  link: {
    width: 200,
    color: "black",
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 25,
    height: 35
  }
});

export default withRouter(NavMenu);
