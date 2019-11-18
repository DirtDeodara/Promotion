import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Stripes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      stripeArray: [
        { filled: false },
        { filled: false },
        { filled: false },
        { filled: false }
      ]
    };
  }

  render() {
    const count = this.state.count;
    const stripes = this.state.stripeArray.map((stripe, i) => (
      <View
        key={i}
        style={stripe.filled ? styles.filled : styles.stripe}
      ></View>
    ));

    return (
      <View style={styles.container}>
        {stripes}
        <Button
          accessible={true}
          accessibilityLabel="Tap me to add a stripe"
          title=" + "
          onPress={() => {
            if (this.state.count < 4) {
              this.setState({ count: this.state.count + 1 });
              return this.state.stripeArray.forEach((stripe, i) => {
                if (count === this.state.stripeArray.indexOf(stripe)) {
                  stripe.filled = true;
                }
              });
            } else {
              this.setState({ count: 0 });
              return this.state.stripeArray.forEach((stripe) => {
                stripe.filled = false;
              });
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
    marginBottom: 20
  },
  stripe: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "white"
  },
  filled: {
    width: 30,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "black"
  }
});
