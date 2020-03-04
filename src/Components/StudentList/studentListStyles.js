import { StyleSheet } from 'react-native'
import colorTheme from '../../data/colorStyleVariables';
export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: colorTheme.borderColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: colorTheme.borderColor,
    borderWidth: 5,
    elevation: 5
  },
  header: {
    color: "white"
  },
  text: {
    fontSize: 14
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    height: 40,
    width: 336,
    flexDirection: "row",
    backgroundColor: colorTheme.containerBackgroundColor,
    borderColor: colorTheme.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginVertical: 2
  },
  button: {
    width: 346,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  beltIndicator: {
    borderWidth: 3,
    borderRadius: 5,
    bottom: 6,
    height: 30,
    width: 60
  }
});