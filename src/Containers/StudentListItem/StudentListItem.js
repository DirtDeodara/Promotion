import React, { Component  } from 'react';
import { View, Text } from 'react-native';
const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.115`

export default class StudentListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }
  

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(`http://${schoolIpAddr}:3000/api/v1/students/1`);
      const data = await response.json();
      this.setState({student: data})

    }
    catch (err) {
      console.log('Load student failed', err);
    }

  };

  render() {
    console.log('jgvadjgvadc', this.state.student.name, 'osdbkbivdsiv')
    return (
      <View>
        <Text>{this.state.student.name}</Text>
        <Text>Rank</Text>
        <Text>Age</Text>
        <Text>Days since last promotion</Text>
        <Text>main coach</Text>
      </View>
    );
  }
}