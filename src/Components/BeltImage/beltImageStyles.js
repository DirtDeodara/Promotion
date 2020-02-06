import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    height: 32,
    marginTop: 8,
    marginBottom: 10,
    bottom: 1,
    borderColor: "black",
    borderWidth: 1
  },
  stripeBar: {
    height: 33,
    marginTop: 8,
    marginBottom: 10,
    bottom: 1,
    borderColor: "black",
    borderWidth: 1,
    bottom: 1.5,
    flexDirection: "row", 
    justifyContent: "space-around", 
    width: 80, 
    backgroundColor: "black",
  },
  stripe: {
    width: 10,
    height: 31,
    borderWidth: 1,
    borderColor: "black"
  },
  filled: {
    width: 8,
    height: 31,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "white"
  }
})
