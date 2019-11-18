import React, { Component } from "react";
import { Picker, View } from "react-native";

export default class BeltPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "blah",
      colors: [
        "Yellow/White",
        "Grey/Black",
        "Grey",
        "Grey/White",
        "White",
        "Blue",
        "Purple",
        "Brown",
        "Black"
      ]
    };
  }
  render() {
    return (
      <View
        style={{
          width: 200,
          height: 48,
          borderColor: "black",
          borderWidth: 4,
          borderRadius: 10,
          marginBottom: 10
        }}
      >
        <Picker
          selectedValue={this.state.color}
          style={{
            height: 40
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ color: itemValue })
          }
        >
          {this.state.colors.map(v => {
            return <Picker.Item label={v} value={v} key={v} />;
          })}
        </Picker>
      </View>
    );
  }
}
