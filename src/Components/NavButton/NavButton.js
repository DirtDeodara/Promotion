import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from 'prop-types';
// import { AntDesign } from "@expo/vector-icons";
import styles from './navButtonStyles';

function NavButton({ handleSubmit, icon, hasSubmitted }) { 
  const history = useHistory();
 
  return (
      <TouchableOpacity
        disabled={hasSubmitted}
        onPress={ async() => {
          handleSubmit && await handleSubmit();
          history.goBack();
        }}
        style={styles.container}
      >
        {icon}
      </TouchableOpacity>
   
  );
}

export default NavButton;
