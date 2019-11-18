import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/Components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
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
