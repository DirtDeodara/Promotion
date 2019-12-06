import React from "react";
import { View, Button, StyleSheet } from "react-native";

function Stripes({ count, iterateStripes }) {
  const stripes = [...Array(4)].map((_, i) => (
    <View key={i} style={count > i ? styles.filled : styles.stripe}></View>
  ));

  return (
    <View style={styles.container}>
      {stripes}
      <Button
        accessible={true}
        accessibilityLabel="Tap this button to add a stripe"
        title=" + "
        onPress={iterateStripes}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
    marginBottom: 20
  },
  stripe: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "white"
  },
  filled: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "black"
  }
});

export default Stripes;
