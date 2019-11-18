import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <>
        <DatePicker
          style={{
            width: 200,
            marginBottom: 10,
            borderColor: "black",
            borderWidth: 3.5,
            borderRadius: 10
          }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1942-05-14"
          maxDate={this.state.date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              borderColor: "black",
            },
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
      </>
    );
  }
}
