import React from "react";
import TextField from '../TextField/TextField';
import { View, Button, Text, Platform, StyleSheet } from 'react-native';
import DatePicker from '../DatePicker/DatePicker'
import BeltPicker from '../BeltPicker/BeltPicker'
import Stripes from '../Stripes/Stripes'

function Form(props) {
  return (
    <View style={styles.container}>
    <Text>Student Name</Text>
      <TextField
        placeholder="   Student name..."
        style={{
          width: 200,
          height: 46,
          borderColor: "black",
          borderWidth: 4,
          borderRadius: 10,
          marginBottom: 10
        }}
      />
      <Text>Birth Date</Text>
      <DatePicker style={{ margin: 10 }}/>
      <Text>Belt Color</Text>
      <BeltPicker />
      <Text>Stripes</Text>
      <Stripes />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

});

export default Form;
