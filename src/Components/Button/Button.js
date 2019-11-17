import React from "react";

import { StyleSheet, Text, View, Button, Alert } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Button 
      title="Button" 
      onPress={() => alert("This is a button, but it doesn't do a thing besides this silly alert. eventually it will route to the student list page")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#000000',
  },

});

export default Header;
