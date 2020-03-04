import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import styles from './headerStyles';
import { searchIcon, burgerIcon, closeIcon } from '../../utils/icons';

const Header = ({ handleTouch, history, position }) => {
  const [searchValue, setSearchValue] = useState('');

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
        style={styles.searchBar}
      />

      <TouchableOpacity name='search-button'
        onPress={handleSubmit}
        style={styles.button}
      >
        {searchIcon}
      </TouchableOpacity>
      <TouchableOpacity name='burgerMenuButton'
        style={{ bottom: 3, right: 1 }}
        onPress={() => handleTouch()}
      >
        {position.isOpen ? closeIcon : burgerIcon}
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  handleTouch: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default withRouter(Header);
