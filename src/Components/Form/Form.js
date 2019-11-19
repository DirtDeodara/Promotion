import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button, Text, StyleSheet } from "react-native";
import TextField from "../TextField/TextField";
import DatePicker from "../DatePicker/DatePicker";
import BeltPicker from "../BeltPicker/BeltPicker";
import Stripes from "../Stripes/Stripes";
import NavButton from "../NavButton/NavButton";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      color: "White"
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

  changeDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Student Name</Text>
        <TextField />
        <Text>Birth Date</Text>
        <DatePicker
          date={this.state.date}
          changeDate={this.changeDate}
          style={{ margin: 10 }}
        />
        <Text>Belt Color</Text>
        <BeltPicker 
          color={this.state.color} 
          selectColor={this.selectColor} 
          />
        <Text>Stripes</Text>
        <Stripes
          iterateStripes={this.iterateStripes}
          count={this.state.count}
        />
        <NavButton />
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
  }
});
