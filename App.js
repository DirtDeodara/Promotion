import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Form from "./src/Containers/Form/Form";
import Header from "./src/Components/Header/Header";
import StudentList from "./src/Containers/StudentList/StudentList";
import StudentListItem from "./src/Containers/StudentListItem/StudentListItem";
import Burger from "./src/Components/Burger/Burger";
import NavMenu from "./src/Components/NavMenu/NavMenu";

export default function App() {
  const [position, setPosition] = useState({ isOpen: false });
  console.log("POSITION", position);

  const handleTouch = () => {
    setPosition({ isOpen: !position.isOpen });
    console.log(position);
  };
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Burger handleTouch={handleTouch} />
        <Route path="/form" component={Form} />
        <Route path="/studentDetail/:id" component={StudentListItem} />
        <Route path="/new" component={Form} />
        <Route exact path="/" component={StudentList} />
        <NavMenu handleTouch={handleTouch} position={position}/>
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
  },
  burger: {
    right: 20
  }
});
