import React from 'react';
import { View, StyleSheet, Text } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Promotion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 30
    
  }
})

export default Header;