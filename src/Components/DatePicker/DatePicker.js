import React from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-native-datepicker";
import styles from './datePickerStyles';

const MyDatePicker = ({ dob, changeDate }) => {
  console.log(typeof(dob))
  return (
    <>
      <DatePicker
        style={styles.picker}
        date={dob}
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

MyDatePicker.propTypes = {
  dob: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default MyDatePicker;
