import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import styles from './stripesStyles';
import { addStripeIcon } from '../../utils/icons';

function StripeInput({ count, iterateStripes }) {
  const stripes = [...Array(4)].map((_, i) => (
    <View key={i} style={count > i ? styles.filled : styles.stripe}></View>
  )).reverse();

  return (
    <View style={styles.container}>
      <View style={styles.blackBar}>
        {stripes}
      </View>
        <TouchableOpacity style={styles.button} onPress={iterateStripes}>
          {addStripeIcon}
        </TouchableOpacity>
    </View>
  );
}

StripeInput.proptypes = {
  count: PropTypes.number.isRequired,
  iterateStripes: PropTypes.func.isRequired
}

export default StripeInput;
