import React from "react";
import DatePicker from "react-native-datepicker";

function MyDatePicker({ date, changeDate }) {
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
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1942-05-14"
        maxDate={new Date()}
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
            borderColor: "black"
          }
        }}
        onDateChange={changeDate}
      />
    </>
  );
}

export default MyDatePicker;
