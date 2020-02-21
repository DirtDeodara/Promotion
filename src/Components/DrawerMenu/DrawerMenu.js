import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-native';
import { Animated, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './drawerMenuStyles';
import colors from '../../data/beltColors';
import BeltIndicator from '../BeltImage/BeltColorIcon';
import { closeIcon } from '../../utils/icons';
import { ScrollView } from 'react-native-gesture-handler';

const DrawerMenu = ({ handleTouch, position, setPosition, history }) => {

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
        style={{ flexDirection: 'column', borderWidth: 2, margin: 3}}
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
        transform: [{ translateX: openAnim }]
      }}
    >
     <ScrollView>
      <TouchableOpacity style={{ left: 30 }} onPress={() => handleTouch()}>
        {closeIcon}
      </TouchableOpacity>
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
