import React from "react";
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from "react-native";
import styles from './burgerStyles';

const Burger = ({ handleTouch }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleTouch()}>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
      <View style={styles.lines}/>
    </TouchableOpacity>
  )
}

Burger.propTypes = {
  handleTouch: PropTypes.func.isRequired
}

export default Burger;