import { StyleSheet } from 'react-native';
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  container: {
    position: "absolute",
    height: 650,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colorTheme.drawerMenuBackground,
    marginBottom: 20,
    paddingTop: 25,
    paddingBottom: 20,
    elevation: 6
  },
  link: {
    width: 178,
    color: "black",
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 25,
    height: 35,
    
  }
});