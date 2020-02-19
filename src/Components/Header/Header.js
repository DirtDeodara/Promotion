import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import styles from './headerStyles';
import { searchIcon, burgerIcon } from '../../utils/icons';

const Header = ({ handleTouch, history }) => {
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = () => {
    Keyboard.dismiss();
    history.push(`/studentList/name/${searchValue}`);
    setSearchValue('');
  }

  return (
    <View style={styles.container}>
      <TextInput name='searchInput'
        placeholder='  Search by student name'
        onChangeText={setSearchValue}
        value={searchValue}
        style={{
          borderColor: 'black',
          borderWidth: 2,
          width: 200,
          height: 40,
          top: 2,
          borderRadius: 15,
          bottom: 30,
          backgroundColor: '#E2E0DA',
          textAlign: 'center'
        }}
      />

      <TouchableOpacity name='search-button'
        onPress={handleSubmit}
        style={{
          height: 40,
          width: 45,
          borderWidth: 2,
          borderRadius: 15,
          backgroundColor: '#E2E0DA',
          top: 2,
          paddingLeft: 6,
          paddingTop: 2,
          right: 25
        }}
      >
        {searchIcon}
      </TouchableOpacity>
      <TouchableOpacity name='burgerMenuButton'
        style={{ bottom: 3, right: 1 }}
        onPress={() => handleTouch()}
      >
        {burgerIcon}
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  handleTouch: PropTypes.func.isRequired
};

export default withRouter(Header);
