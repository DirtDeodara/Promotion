import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { AntDesign } from "@expo/vector-icons";
import styles from './navButtonStyles';

function NavButton({ handleSubmit }) { 
  const history = useHistory();
 
  return (
    
      <TouchableOpacity
        onPress={() => {
          handleSubmit && handleSubmit()
          history.goBack()
        }}
        style={styles.container}
      >
        <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>
      </TouchableOpacity>
   
  );
}

export default NavButton;
