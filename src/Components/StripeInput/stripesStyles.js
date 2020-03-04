import { StyleSheet } from 'react-native';
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  container: {
    width: 198,
    height: 62,
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: colorTheme.containerBackgroundColor
  },
  blackBar: {
    backgroundColor: "black",
    borderRadius: 3,
    height: 60,
    width: 160,
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: 2
  },
  stripe: {
    width: 18,
    height: 60,
    borderRightColor: '#2A2A2A',
    borderLeftColor: '#2A2A2A',
    borderWidth: 1,
    backgroundColor: "black"
  },
  filled: {
    width: 18,
    height: 62,
    borderColor: "black",
    borderWidth: 4,
    backgroundColor: "white",
    borderWidth: 1,
    bottom: 1
  },
  button: {
    top: 1,
    height: 62,
    width: 30,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});