import React from "react";
import { TextInput, View } from "react-native";
import styles from './textFieldStyles';
import PropTypes from 'prop-types';

function TextField({ onChangeText, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        accessible={true}
        accessibilityLabel="Text input for student's name"
        style={styles.input}
        placeholder="   Student name..."
        editable
        maxLength={35}
        value={value}
      />
    </View>
  );
}

TextField.proptypes = {
  onChangeText: PropTypes.func.isRequired, 
  value: PropTypes.string.isRequired
}

export default TextField;
