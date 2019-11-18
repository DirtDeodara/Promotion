import React from "react";
import TextField from '../TextField/TextField';
import { View, Button, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import DatePicker from '../DatePicker/DatePicker'
import BeltPicker from '../BeltPicker/BeltPicker'
import Stripes from '../Stripes/Stripes'
import NavButton from '../NavButton/NavButton'

function Form(props) {
  return (
    <View style={styles.container}>
    <Text>Student Name</Text>
      <TextField />
      <Text>Birth Date</Text>
      <DatePicker style={{ margin: 10 }}/>
      <Text>Belt Color</Text>
      <BeltPicker />
      <Text>Stripes</Text>
      <Stripes />
      <NavButton />
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
