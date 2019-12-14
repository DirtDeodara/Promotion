import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../../Components/TextField/TextField";
import DatePicker from "../../Components/DatePicker/DatePicker";
import BeltPicker from "../../Components/BeltPicker/BeltPicker";
import Stripes from "../../Components/Stripes/Stripes";
import NavButton from "../../Components/NavButton/NavButton";
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.115`;
import { addStudent } from "../../services/studentApi";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: new Date(),
      name: "",
      stipes: 0,
      color: "White",
      lastPromotion: "",
      gym: ""
    };
  }

  iterateStripes = () => {
    this.setState(state => {
      return {
        stripes: state.stripes < 4 ? state.stripes + 1 : 0
      };
    });
  };

  selectColor = color => {
    this.setState({ color });
  };

  changeDate = dob => {
    this.setState({ dob });
  };

  setStipes = stripes => {
    this.setState({ stripes });
  };

  setName = name => {
    this.setState({ name });
  };

  handleSubmit = () => {
    fetch(`http://${schoolIpAddr}:3000/api/v1/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        date_of_birth: this.state.dob,
        gym: "Straight Blast Gym",
        stripes: this.state.stripes

      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Student Name</Text>
        <TextField
          name="name"
          onChangeText={this.setName}
          value={this.state.name}
        />
        <Text>Birth Date</Text>
        <DatePicker
          dob={this.state.dob}
          changeDate={this.changeDate}
          style={{ margin: 10 }}
        />
        <Text>Belt Color</Text>
        <BeltPicker color={this.state.color} selectColor={this.selectColor} />
        <Text>Stripes</Text>
        <Stripes
          iterateStripes={this.iterateStripes}
          count={this.state.stripes}
        />
        <View style={styles.button}>
          <NavButton handleSubmit={this.handleSubmit} link={"/"} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  button: {
    marginTop: 70
  }
});
