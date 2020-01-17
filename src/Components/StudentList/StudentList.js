import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router-native';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
const moment = require("moment");
import NavButton from '../NavButton/NavButton'
import colors from '../../data/colors';
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.82`

const StudentList = ({ match, history }) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchStudents();
  }, [match.params.color]);

  const fetchStudents = async () => {
    try {
      let url = match.params.color 
      ? 
      `http://${schoolIpAddr}:3000/api/v1/students/color/${match.params.color.toLowerCase()}` 
      :
      `http://${schoolIpAddr}:3000/api/v1/students`;
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    }
    catch (err) {
      console.log('Load students failed', err);
    }
  };

  const listOfStudents = ({ item: student }) => {
    const now = moment();
    let then;
    if(student.promotions) {
      then = moment(student.promotions.createdAt);
    }
    const daysSinceLastPromotion = now.diff(then, "days");

    const promotionTextField = () => {
      if(student.promotions) {
        return <Text style={styles.date}>{`${daysSinceLastPromotion} days ago`}</Text>
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
        style={styles.button}
        style={styles.item}
      >
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.name} style={styles.color}>{student.beltColor}</Text> 
        {promotionTextField()}
      </TouchableOpacity>
    );
  };

  const loadingGif = require('../../../assets/hex.gif');
  const LoadingSpinner = <Image style={{ height: 100, width: 100}} source={loadingGif} />

  return (
    <SafeAreaView>
    <View style={styles.container}>
      {isLoading 
        ? 
        LoadingSpinner 
        : 
        <View style={styles.container}>
          <View style={styles.headers}>
            <Text style={styles.header}>Student Name       |       Belt       |       Last Promotion</Text>
          </View>
          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={students}
            renderItem={listOfStudents}
          /> 
        </View>
      }
    </View>
    <View style={styles.button}>
      <NavButton />
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 460,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
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
    width: 340,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
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
  }
});

export default withRouter(StudentList);