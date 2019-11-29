import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../../Components/TextField/TextField";
import DatePicker from "../../Components/DatePicker/DatePicker";
import BeltPicker from "../../Components/BeltPicker/BeltPicker";
import Stripes from "../../Components/Stripes/Stripes";
import NavButton from "../../Components/NavButton/NavButton";
import { addStudent } from "../../services/studentApi";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: new Date(),
      name: "",
      count: 0,
      color: "White",
      lastPromotion: ""
    };
  }


  iterateStripes = () => {
    this.setState(state => {
      return {
        count: state.count < 4 ? state.count + 1 : 0
      };
    });
  };

  selectColor = color => {
    this.setState({ color });
  };

  changeDate = dob => {
    this.setState({ dob });
  };

  setStipes = count => {
    this.setState({ count });
  };

  setName = name => {
    this.setState({ name });
  };

  handleSubmit = () => {
    console.log('hello???');
    addStudent({name, dob});
  };

  // handleSubmit = () => {
  //   // this will be for the form  button
  //   // put
  // }

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
          count={this.state.count}
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
