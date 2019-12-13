import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Form from "./src/Containers/Form/Form";
import Header from "./src/Components/Header/Header";
import StudentList from './src/Containers/StudentList/StudentList';
import StudentListItem from './src/Containers/StudentListItem/StudentListItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <NativeRouter>
        <Route path="/form" component={Form} /> 
        <Route path="/studentDetail/:id" component={StudentListItem} /> 
        <Route path="/new" component={Form} />
        <Route exact path="/" component={StudentList} />
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});

