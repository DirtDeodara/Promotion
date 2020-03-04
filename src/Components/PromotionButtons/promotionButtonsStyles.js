import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 300,
    height: 70,
    marginTop: 10
  },
  stripeButton: { 
    borderWidth: 4, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    top: 5,
    elevation: 5
  },
  promoteBeltButton: {
    width: 60, 
    height: 60, 
    borderWidth: 4, 
    borderRadius: 30, 
    alignSelf: 'center',
    elevation: 5
  }
});