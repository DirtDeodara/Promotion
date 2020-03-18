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
    borderColor: 'black',
    borderWidth: 5,
    elevation: 5
  },
  button: {
    width: 346,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
});
