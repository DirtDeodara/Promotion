import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Stripes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const count = this.state.count;
    const stripeArray = [];
    const stripeRenderer = (count) => {
      if(count > 0 && count < 5) {
        for(let i = 1; i < count + 1; i++) {
          console.log(count)
          stripeArray.push(<View key={i} style={styles.stripe}></View>)
        }
      }
      return stripeArray;
    }
    {stripeRenderer(count)}
    
    return (
      <View style={styles.container}>
        {stripeArray.map(stripe => {
            return stripe;
          })}
        <Button 
        title=" + "
        onPress={() => {
          if(this.state.count < 4){
            this.setState({count: this.state.count + 1}) 
          } else {
            this.setState({count: 0})
          }
        }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
  },
  stripe: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "black"
  },
  
});
