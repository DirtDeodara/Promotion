import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-native';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NavButton from '../NavButton/NavButton'
import { AntDesign } from "@expo/vector-icons";
import { fetchStudents } from '../../services/studentsApi';
import styles from './studentListStyles';
const moment = require("moment");

const StudentList = ({ match, history }) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchStudents(match.params.color, setStudents, setIsLoading);
  }, [match.params.color]);

  const backIcon = () => {
    return <AntDesign name="doubleleft" size={50} style={{ right: 2 }}/>
  }
  
  const listOfStudents = ({ item: student }) => {
    const [maincolor, stripeColor] = student.promotions.belt_color.split('/').slice(0, 2)
    const now = moment();
    let then;
    if(student.promotions) {
      then = moment(student.promotions.createdAt);
    }
    const daysSinceLastPromotion = now.diff(then, "days");

    const lastPromotionAndBeltColorField = () => {
      if(student.promotions) {
        return (
          <View style={{ flexDirection: "row" }}>
            <View style={{ ...styles.beltIndicator,flexDirection: 'row' }}>
              <View style={{ width: 18, height: 24, backgroundColor: maincolor  === 'brown' ? '#654321' : maincolor }}/> 
              <View style={{ width: 18, height: 24, backgroundColor: stripeColor  === 'brown' ? '#654321' : stripeColor }}/> 
              <View style={{ width: 18, height: 24, backgroundColor: maincolor  === 'brown' ? '#654321' : maincolor }}/> 
            </View>
            <Text style={styles.date}>{`${daysSinceLastPromotion} days ago`}</Text>
          </View>
        )
      } else {
        return <Text style={styles.date}>New Student</Text>
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          history.push(`/studentDetail/${student.id}`);
        }}
        student={student}
        style={styles.item}
      >
        <Text style={styles.name}>{student.name}</Text>
        {lastPromotionAndBeltColorField()}
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