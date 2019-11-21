import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import students from "../../data/students";
import NavButton from "../../Components/NavButton/NavButton";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students
    };
  }
  render() {

    const listOfStudents = ({item: student}) => {
    return (
        
          <TouchableOpacity onPress={() => {this.props.history.push('/form')}} style={styles.button} style={styles.item} >
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.date}>{student.lastPromotionDate}</Text>
          </TouchableOpacity>
     
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headers}>
          <Text style={styles.header}>Student Name           |          Last Promotion</Text>
        </View>
        <FlatList keyExtractor={(_, i) => i.toString()} data={this.state.students} renderItem={listOfStudents}></FlatList>
        <NavButton link={"/form"} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 400,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 5
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
    fontSize: 10,
    color: "white"
  },
  header: {
    color: "white"
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    height: 40,
    width: 270,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 2
  },
  
});

