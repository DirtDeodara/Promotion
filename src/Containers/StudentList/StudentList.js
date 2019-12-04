import React, { Component } from "react";
import PropTypes from "prop-types";
var moment = require("moment");
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from "react-native";
import NavButton from "../../Components/NavButton/NavButton";
import { getStudents } from "../../services/studentApi";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.115:3000/api/v1/students');
      const data = await response.json();
      this.setState({students: data})

    }
    catch (err) {
      console.log('Load students failed', err);
  }

  };

  render() {
    const listOfStudents = ({ item: student }) => {
      const now = moment();
      const then = moment(student.lastPromotionDate);
      const daysSinceLastPromotion = now.diff(then, "days");

      return (
        <TouchableOpacity
          onPress={() => {
            this.props.history.push("/form");
          }}
          style={styles.button}
          style={styles.item}
        >
          <Text style={styles.name}>{student.name}</Text>
          <Text
            style={styles.date}
          >{`${daysSinceLastPromotion} days ago`}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headers}>
            <Text style={styles.header}>Student Name | Last Promotion</Text>
          </View>
          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={this.state.students}
            renderItem={listOfStudents}
          ></FlatList>
        </View>
        <View style={styles.button}>
          <NavButton link={"/form"} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 480,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // marginBottom: 10,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10
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
    fontSize: 30,
    justifyContent: "space-between",
    height: 50,
    width: 340,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 2
  },
  button: {
    width: 346,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20
  }
});
