import { StyleSheet } from 'react-native';
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: colorTheme.containerBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: colorTheme.borderColor,
    borderWidth: 5,
    elevation: 5
  },
  nameText: {
    fontSize: 23
  },
  text: {
    fontSize: 20
  },
  image: {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 20,
    width: 180,
    height: 180
  },
  button: {
    width: 346,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
