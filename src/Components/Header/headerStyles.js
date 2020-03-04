import { StyleSheet } from "react-native";
import colorTheme from "../../data/colorStyleVariables";

export default styles = StyleSheet.create({
  container: {
    width: 340,
    height: 45,
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6
  },
  searchBar: {
    borderColor: "black",
    borderWidth: 2,
    width: 200,
    height: 40,
    top: 2,
    borderRadius: 15,
    bottom: 30,
    backgroundColor: colorTheme.searchColor,
    textAlign: "center"
  },
  button: {
    height: 40,
    width: 45,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: colorTheme.searchColor,
    top: 2,
    paddingLeft: 6,
    paddingTop: 2,
    right: 25
  },
  text: {
    fontSize: 50
  }
});
