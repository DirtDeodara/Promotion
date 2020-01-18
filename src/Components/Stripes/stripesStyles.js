import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2
  },
  stripe: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "white"
  },
  filled: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "black"
  }
});