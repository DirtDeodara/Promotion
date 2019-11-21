import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../../Components/TextField/TextField";
import DatePicker from "../../Components/DatePicker/DatePicker";
import BeltPicker from "../../Components/BeltPicker/BeltPicker";
import Stripes from "../../Components/Stripes/Stripes";
import NavButton from "../../Components/NavButton/NavButton";

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
        <NavButton link={'/'}/>
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
