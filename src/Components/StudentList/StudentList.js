import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-native';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NavButton from '../NavButton/NavButton'
import { backIcon } from '../../utils/icons';
import { fetchStudents } from '../../services/studentsApi';
import styles from './studentListStyles';
const moment = require("moment");
import BeltColorIcon from "../BeltImage/BeltColorIcon";
import { useStudents } from '../../hooks/student';

const StudentList = ({ match, history }) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchStudents(match.params.color, match.params.name, setStudents, setIsLoading);
  }, [match.params.color, match.params.name]);

  
  const listOfStudents = ({ item: student }) => {
    const now = moment();
    const then = moment(student.createdAt);
    const daysSinceLastPromotion = now.diff(then, "days");

    return (
      <TouchableOpacity
        onPress={() => {
          history.push(`/studentDetail/${student.studentId}`);
        }}
        student={student}
        style={styles.item}
      >
        <Text style={styles.name}>{student.name}</Text>
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
    <SafeAreaView>
    <View style={styles.container}>
      {isLoading 
        ? 
        <LoadingSpinner /> 
        : 
        <View style={styles.container}>
          <View style={styles.headers}>
            <Text style={styles.header}>Student Name                                  Last Promotion</Text>
          </View>
          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={students}
            renderItem={listOfStudents}
            initialNumToRender={10}
            showsVerticalScrollIndicator={false}
          /> 
        </View>
      }
    </View>
    {history.index === 0
      ? 
      <View style={{ width: 346, height: 100 }}/>
      : 
      <View style={styles.button}>
        <NavButton icon={backIcon}/>
      </View>}
  </SafeAreaView>
  );
};

export default withRouter(StudentList);