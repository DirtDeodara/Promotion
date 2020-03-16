import { StyleSheet } from 'react-native';
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  text: {
    fontSize: 21,
  },
  row: { flexDirection: 'row' },
  image: { 
    width: 200, 
    height: 200, 
    backgroundColor: 'black', 
    borderWidth: 5, 
    borderColor: 'black', 
    borderRadius: 10,
    // resizeMode: 'contain'
  },
  button: {
    padding: 8,
    marginHorizontal: 13,
    marginVertical: 7,
    borderRadius: 5,
    backgroundColor: 'darkred',
  },
  container: {
    backgroundColor: colorTheme.containerBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
