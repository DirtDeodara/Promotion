import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-native';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import PropTypes from 'prop-types';
import colors from '../../data/colors';

import styles from './newBeltPickerStyles';
import BeltColorIcon from "../BeltImage/BeltColorIcon";

const NewBeltPicker = ({ setBeltColor }) => {
  
  const listOfBelts = ({ item: belt }) => {
    return (
      <TouchableOpacity onPress={() => setBeltColor(beltColor)}>
        <View style={{ borderTopWidth: 1, borderBottomWidth: 1, marginVertical: 2 }}>
          <BeltColorIcon beltWidth={190} beltHeight={10} flexDirection='column' color={belt}/>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={colors}
        renderItem={listOfBelts}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
      /> 
    </View>
  );
};

export default NewBeltPicker;