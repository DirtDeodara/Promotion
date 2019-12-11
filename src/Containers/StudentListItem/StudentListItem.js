import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const moment = require("moment");
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.115`;
const placeHolderImage = require("../../../assets/901628_3482411075020_339201519_o.jpg");

export default class StudentListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      promotion: {}
    };
  }

  componentDidMount() {
    this.fetchStudent();
    this.fetchPromotion();
  }

  fetchStudent = async () => {
    try {
      const response = await fetch(
        `http://${homeIpAddr}:3000/api/v1/students/1`
      );
      const data = await response.json();
      this.setState({ student: data });
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  };

  fetchPromotion = async () => {
    try {
      const response = await fetch(
        `http://${homeIpAddr}:3000/api/v1/promotions/1`
      );
      const data = await response.json();
      this.setState({ promotion: data });
    } catch (err) {
      console.log("The desired promotion failed to load", err);
    }
  };

  render() {
    const now = moment();
    const then = moment(this.state.student.date_of_birth);
    const age = now.diff(then, "years");
    const color = String(this.state.promotion.belt_color).toLowerCase();
    const numOfStripes = this.state.promotion.stripes;

    const stripes = [...Array(4)].map((_, i) => (
      <View
        key={i}
        style={numOfStripes > i ? styles.filled : styles.stripe}
      ></View>
    ));

    return (
      <View style={{ ...styles.container }}>
        <Text style={styles.nameText}>{this.state.student.name}</Text>
        <Image style={styles.image} source={placeHolderImage} />
        <View style={{ ...styles.belt, backgroundColor: color }}>
          {stripes}
        </View>
        {/* <Text style={styles.text}>{this.state.promotion.stripes} stripe {this.state.promotion.belt_color} belt</Text> */}
        <Text style={styles.text}>{age} years old</Text>
        <Text style={styles.text}>Days since last promotion</Text>
        <Text style={styles.text}>
          Last promoted by {this.state.promotion.coach_who_promoted}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 480,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10
  },
  nameText: {
    fontSize: 25
  },
  text: {
    fontSize: 20
  },
  image: {
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    width: 200,
    height: 200
  },
  button: {
    width: 346,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20
  },
  belt: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 30,
    width: 300,
    marginTop: 8,
    borderColor: "black",
    borderWidth: 1
  },
  stripe: {
    width: 10,
    height: 28,
    borderColor: "black",
    borderWidth: 4,
    marginRight: 12,
    backgroundColor: "white"
  },
  filled: {
    width: 10,
    height: 28,
    borderColor: "black",
    borderWidth: 4,
    marginRight: 12,
    backgroundColor: "black"
  }
});
