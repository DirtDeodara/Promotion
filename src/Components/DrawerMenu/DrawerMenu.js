import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-native';
import { Animated, Text, TouchableOpacity, Easing } from 'react-native';
import PropTypes from 'prop-types';
import styles from './drawerMenuStyles';
import colors from '../../data/beltColors';
import BeltIndicator from '../BeltImage/BeltColorIcon';
import { ScrollView } from 'react-native-gesture-handler';

const DrawerMenu = ({ handleTouch, position, setPosition, history }) => {

  const [openAnim] = useState(new Animated.Value(630));
  useEffect(() => {
    Animated.timing(
      openAnim,
      {
        toValue: position.isOpen ? 45 : 630,
        duration: 450,
        easing: Easing.easeOutCirc
      }
    ).start();
  }, [position.isOpen]);

  const handleNavPress = path => {
    history.push(path);
    setTimeout(() => {
      setPosition({ isOpen: !position.isOpen })
    }, 500);
  }
  
  const listOfLinks = colors.map((color, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => handleNavPress(`/studentList/color/${color}`)}
        style={{ flexDirection: 'column', borderWidth: 2, margin: 5, borderRadius: 2, elevation: 3 }}
      >
        <BeltIndicator
          beltWidth={175}
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
        transform: [{ translateY: openAnim }]
      }}
    >
     <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => handleNavPress('/newStudentForm')}>
        <Text style={styles.link}>New Student Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/')}>
        <Text style={styles.link}>All Students</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/studentList/age/adults')}>
        <Text style={styles.link}>Adults</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/studentList/age/teens')}>
        <Text style={styles.link}>Teens</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/studentList/age/kids')}>
        <Text style={styles.link}>Kids</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/studentList/coach/Eddie')}>
        <Text style={styles.link}>Eddie's Students</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('/studentList/coach/Chris')}>
        <Text style={styles.link}>Chris' Students</Text>
      </TouchableOpacity>
      {listOfLinks}
      </ScrollView> 
    </Animated.View>
  );
};

DrawerMenu.propTypes = {
  handleTouch: PropTypes.func.isRequired,
  position: PropTypes.object.isRequired,
  setPosition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(DrawerMenu);
