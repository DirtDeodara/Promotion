import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Animated } from "react-router-native";
import Form from "./src/Containers/Form/Form";
import Header from "./src/Components/Header/Header";
import StudentList from './src/Components/StudentList/StudentList';
// import StudentListItem from "./src/Containers/StudentListItem/StudentListItem";
import StudentListItem from './src/Components/StudentListItem/StudentListItem';
import NewStudentForm from './src/Components/NewStudentForm/NewStudentForm';
import Burger from "./src/Components/Burger/Burger";
import DrawerMenu from "./src/Components/DrawerMenu/DrawerMenu";

export default function App() {
  const [position, setPosition] = useState({ isOpen: false });

  const handleTouch = () => {
    setPosition({ isOpen: !position.isOpen });

  };
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Burger handleTouch={handleTouch} />
        <Route path="/newStudentform" component={NewStudentForm} />
        <Route path="/studentDetail/:id" component={StudentListItem} />
        <Route path="/new" component={Form} />
        <Route path="/studentList/:color" component={StudentList} />
        <Route exact path="/" component={StudentList} />
        <DrawerMenu handleTouch={handleTouch} position={position}/>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBD3F8",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  burger: {
    right: 20
  }
});
