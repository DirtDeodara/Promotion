import { StyleSheet } from 'react-native';
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    color: "black",
    backgroundColor: colorTheme.navButtonColor,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 35,
    marginBottom: 10,
    elevation: 5
  }
})