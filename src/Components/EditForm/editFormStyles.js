import { StyleSheet } from "react-native";
import colorTheme from '../../data/colorStyleVariables';

export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: colorTheme.containerBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    elevation: 5
  },
  loadingContainer: {
    width: 346,
    height: 460,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
  }
});
