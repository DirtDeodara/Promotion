import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 46,
    backgroundColor: 'white',
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 10
  },
  input: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 10
  }
});

export default TextField;
