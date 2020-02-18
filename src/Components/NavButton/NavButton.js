import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import PropTypes from 'prop-types';
import styles from './navButtonStyles';

function NavButton({ icon, handleSubmit, hasSubmitted }) { 
  const history = useHistory();
 
  return (
      <TouchableOpacity
        disabled={hasSubmitted}
        onPress={ async() => {
          try{
            handleSubmit && await handleSubmit();
            history.goBack();
          }
          catch(e) {
            console.log('did nothing')
          }
        }}
        style={styles.container}
      >
        {icon}
      </TouchableOpacity>
   
  );
}

export default NavButton;
