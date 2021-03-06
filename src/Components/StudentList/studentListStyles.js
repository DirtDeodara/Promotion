import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    // borderRadius: 10,  //TODO not sure if i want radius or not
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
    fontSize: 10,
    color: "white"
  },
  header: {
    color: "white"
  },
  item: {
    flex: 1,
    fontSize: 30,
    justifyContent: "space-between",
    height: 40,
    width: 336,
    flexDirection: "row",
    backgroundColor: "#E2E0DA",
    borderColor: "black",
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
    flexDirection: "column",
  },
  beltIndicator: {
    borderWidth: 3,
    borderRadius: 5,
    right: 30,
    bottom: 6,
    height: 30,
    width: 60,
  }
});