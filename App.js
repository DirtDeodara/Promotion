import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Header from './src/Components/Header/Header';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header style={styles.header}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'papayawhip',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   header: {
//     position: 'absolute',
// 	  top: 0,
//   	left: 0
//   }
// });
