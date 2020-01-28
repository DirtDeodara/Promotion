import React from "react";
import { View, Button, StyleSheet } from "react-native";
import styles from './stripesStyles';

function Stripes({ count, iterateStripes }) {
  const stripes = [...Array(4)].map((_, i) => (
    <View key={i} style={count > i ? styles.filled : styles.stripe}></View>
  ));

  return (
    <View style={styles.container}>
      {stripes}
      <Button
        style={ styles.button }
        accessible={true}
        accessibilityLabel="Tap this button to add a stripe"
        title=" + "
        onPress={iterateStripes}
      />
    </View>
  );
}

export default Stripes;
