import React from "react";
import { withRouter } from "react-router-native";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./drawerMenuStyles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../data/colors";
import colorChecker from "../../utils/colorChecker";
import colorExtractor from "../../utils/colorExtractor";
import BeltIndicator from "../BeltImage/BeltIndicator";

const DrawerMenu = ({ handleTouch, position, history }) => {
  const listOfLinks = colors.map((color, i) => {
    const [mainColor, secondaryColor] = colorExtractor(color);

    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          history.push(`/studentList/${color}`);
        }}
        style={{ flexDirection: "column", borderWidth: 2 }}
      >
        <BeltIndicator
          beltwidth={180}
          beltheight={10}
          flexDirection={"column"}
          mainColor={mainColor}
          secondaryColor={secondaryColor}
        />
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => handleTouch()}
      style={{
        ...styles.container,
        borderWidth: 3,
        transform: [
          {
            translateX: position.isOpen ? 85 : 280
          }
        ]
      }}
    >
      <AntDesign name="close" size={45} style={{ paddingLeft: 110 }} />
      <TouchableOpacity onPress={() => history.push("/newStudentForm")}>
        <Text style={styles.link}>New Student Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push("/")}>
        <Text style={styles.link}>All Students</Text>
      </TouchableOpacity>
      {listOfLinks}
    </TouchableOpacity>
  );
};

export default withRouter(DrawerMenu);
