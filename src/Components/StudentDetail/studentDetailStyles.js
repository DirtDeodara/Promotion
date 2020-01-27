import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    alignItems: 'center',
    backgroundColor: '#E2E0DA',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  },
  image: {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    width: 180,
    height: 180
  },
  button: {
    width: 346,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})
