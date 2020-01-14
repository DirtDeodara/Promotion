import React, { Component } from "react";
import PropTypes from "prop-types";
const moment = require("moment");
import NavButton from "../../Components/NavButton/NavButton";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from "react-native";
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.115`

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.fetchAllStudents();
  }

  componentDidUpdate(previousProps) {
    if(previousProps.match.params.color !== this.props.match.params.color) {
      this.fetchAllStudents();
    }
  }

  fetchAllStudents = async () => {
    try {
      const url = this.props.match.params.color 
      ? 
      `http://${schoolIpAddr}:3000/api/v1/students/color/${this.props.match.params.color.toLowerCase()}` 
      :
      `http://${schoolIpAddr}:3000/api/v1/students`;
      const response = await fetch(url);
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
      let then;
      if(student.promotions) {
        then = moment(student.promotions.createdAt);
      }
      const daysSinceLastPromotion = now.diff(then, "days");

      return (
        <TouchableOpacity
          onPress={() => {
            this.props.history.push(`/studentDetail/${student.id}`);
          }}
          student={student}
          style={styles.button}
          style={styles.item}
        >
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.name} style={styles.color}>{student.beltColor}</Text> 
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
            <Text style={styles.header}>Student Name    |       Belt       |       Last Promotion</Text>
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
    height: 460,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
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
    height: 40,
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
  }
});
