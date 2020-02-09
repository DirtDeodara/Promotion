import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-native';
import { Animated, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './drawerMenuStyles';
import colors from '../../data/colors';
import BeltIndicator from '../BeltImage/BeltColorIcon';
import { closeIcon } from '../../utils/icons';

const DrawerMenu = ({ handleTouch, position, history }) => {

  const [openAnim] = useState(new Animated.Value(280));
  useEffect(() => {
    Animated.timing(
      openAnim,
      {
        toValue: position.isOpen ? 85 : 280,
        duration: 150,
      }
    ).start();
  }, [position.isOpen]);
  



  const listOfLinks = colors.map((color, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          history.push(`/studentList/color/${color}`);
        }}
        style={{ flexDirection: 'column', borderWidth: 2 }}
      >
        <BeltIndicator
          beltWidth={180}
          beltHeight={10}
          flexDirection={'column'}
          color={color}
        />
      </TouchableOpacity>
    );
  });
  
  return (
    <Animated.View
      onPress={() => handleTouch()}
      style={{
        ...styles.container,
        borderWidth: 3,
        transform: [
          {
            translateX: openAnim
          }
        ]
      }}
    >
      <TouchableOpacity onPress={() => handleTouch()}>
        {closeIcon}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/newStudentForm')}>
        <Text style={styles.link}>New Student Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Text style={styles.link}>All Students</Text>
      </TouchableOpacity>
      {listOfLinks}
    </Animated.View>
  );
};

export default withRouter(DrawerMenu);
