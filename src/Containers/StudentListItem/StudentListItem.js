import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NavButton from "../../Components/NavButton/NavButton";
const moment = require("moment");
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.115`;
const placeHolderImage = require("../../../assets/a.jpg");

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

  fetchStudent = async id => {
    try {
      const response = await fetch(
        `http://${schoolIpAddr}:3000/api/v1/students/${this.props.match.params.id}`
      );
      const data = await response.json();
      this.setState({ student: data });
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  };

  fetchPromotion = async studentId => {
    try {
      const response = await fetch(
        `http://${schoolIpAddr}:3000/api/v1/promotions/${this.props.match.params.id}`
      );
      const data = await response.json();
      console.log('XXXXXXXXXX', data, 'XXXXXXXXXXX');
      this.setState({ promotion: data });
    } catch (err) {
      console.log("The desired promotion failed to load", err);
    }
  };

  render() {
    const now = moment();
    const then = moment(this.state.student.date_of_birth);
    const age = now.diff(then, "years");
    const lastPromotionDate = moment(this.state.promotion.createdAt);
    const daysSinceLastPromotion = now.diff(lastPromotionDate, "days");
    const color = String(this.state.promotion.belt_color).toLowerCase();
    const numOfStripes = this.state.promotion.stripes;
    const coachWhoPromoted = this.state.promotion.coach_who_promoted;
    const studentName = this.state.student.name;

    const stripes = [...Array(4)].map((_, i) => (
      <View
        key={i}
        style={ numOfStripes > i ? styles.filled : { ...styles.stripe, backgroundColor: color } }
      ></View>
    )).reverse();

    return (
      <View>
        <View style={{ ...styles.container }}>
          <Text style={styles.nameText}>{studentName}</Text>
          <Image style={styles.image} source={placeHolderImage} />
          <View style={{ ...styles.belt, backgroundColor: color }}>
            {stripes}
          </View>
          {/* <Text style={styles.text}>{this.state.promotion.stripes} stripe {this.state.promotion.belt_color} belt</Text> */}
          <Text style={styles.text}>{age} years old</Text>
          <Text style={styles.text}>{daysSinceLastPromotion} days since last promotion</Text>
          <Text style={styles.text}>
            Last promoted by {coachWhoPromoted}
          </Text>
        </View>
        <View style={styles.button}>
          <NavButton link={"/"} />
        </View>
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
    borderRadius: 10,
    marginTop: 20
  },
  nameText: {
    fontSize: 25,
    marginBottom: 20
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
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
    borderWidth: 1,
    marginRight: 12,
    borderColor: "black"
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
