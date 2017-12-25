//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import SingleColorHorizontoalItem from "./SingleColorHorizontoalItem";

// create a component
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divHeight: "0%"
    };
    //  this._listYear = this._listYearMonth.bind();
  }

  componentWillMount() {
    this.setState({
      divHeight: "70%"
    });
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 50,
      duration: 1000,
      easing: Easing.bounce
    }).start();
  }
  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={styles.container}>
        <SingleColorHorizontoalItem
          mainDivHeight={320}
          mainDivWidth={50}
          mainDivBackgroundColor={"#d00000"}
          childDivHeight={150}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30
  }
});

//make this component available to the app
export default HomePage;
