import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: '#E0E4FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 5,
    // borderRadius: 10, //TODO not sure if i want this or not
  },
  nameText: {
    fontSize: 23
  },
  text: {
    fontSize: 20
  },
  image: {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 20,
    width: 180,
    height: 180
  },
  button: {
    width: 346,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
