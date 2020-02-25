import React from 'react';
import { withRouter } from 'react-router-native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NavButton from '../NavButton/NavButton'
import { backIcon } from '../../utils/icons';
import { useStudents } from '../../hooks/students';
import styles from './studentListStyles';
import BeltColorIcon from '../BeltImage/BeltColorIcon';
const moment = require('moment');

const StudentList = ({ match, history }) => {
 const { students, isLoading } = useStudents(match);

  if(isLoading) return (
    <View> 
      <View style={{ ...styles.container, backgroundColor: 'black' }}>
        <LoadingSpinner />
      </View>
      <View style={{...styles.button}}>
      </View>
    </View>
  )
 
  const listOfStudents = ({ item: student }) => {
    const now = moment();
    const then = moment(student.createdAt);
    const daysSinceLastPromotion = now.diff(then, 'days');

    return (
      <TouchableOpacity
        onPress={() => {
          history.push(`/studentDetail/${student.studentId}`);
        }}
        student={student}
        style={styles.item}
      >
        <Text style={styles.text}>{student.name}</Text>
        <View style={{ flexDirection: 'row', width: 160, justifyContent: 'space-between'}}>
          <View style={styles.beltIndicator}>
            <BeltColorIcon beltWidth={18} beltHeight={24} flexDirection='row' color={student.belt_color}/>
          </View>
          <Text style={styles.date}>{`${daysSinceLastPromotion} days ago`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
    <View style={styles.container}>
     
        <Text style={styles.header}>Student Name                                  Last Promotion</Text>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={students}
          renderItem={listOfStudents}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
        /> 
     
    </View>
    {history.index === 0
      ? 
      <View style={{ width: 346, height: 100 }}/>
      : 
      <View style={styles.button}>
        <NavButton icon={backIcon}/>
      </View>}
  </View>
  );
};

StudentList.proptypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(StudentList);
