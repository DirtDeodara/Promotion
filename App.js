import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import StudentList from './src/Components/StudentList/StudentList';
import StudentDetail from './src/Components/StudentDetail/StudentDetail';
import NewStudentForm from './src/Components/NewStudentForm/NewStudentForm';
import Header from './src/Components/Header/Header';
import DrawerMenu from './src/Components/DrawerMenu/DrawerMenu';
import EditForm from './src/Components/EditForm/EditForm';

export default function App() {
  const [position, setPosition] = useState({ isOpen: false });

  const handleTouch = () => {
    setPosition({ isOpen: !position.isOpen });
  };

  return (
    <View style={styles.container}>
      <NativeRouter>
        <Header handleTouch={handleTouch} />
        <Route path='/newStudentform' component={NewStudentForm} />
        <Route path='/editForm/:id' component={EditForm} />
        <Route path='/studentDetail/:id' component={StudentDetail} />
        <Route path='/studentList/color/:color' component={StudentList} />
        <Route path='/studentList/name/:name' component={StudentList} />
        <Route path='/studentList/age/:age' component={StudentList} />
        <Route exact path='/' component={StudentList} />
        <DrawerMenu handleTouch={handleTouch} position={position} setPosition={setPosition}/>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF476F',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
