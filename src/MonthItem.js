//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import PropTypes from "prop-types";
//https://github.com/react-native-community/react-native-linear-gradient
// create a component
class MonthItem extends Component {
  render() {
    return (
      <View style={SingleHorizontalBarStyle.textContainer}>
        <Text style={{ width: 50, textAlign: "center", color: "#fff" }}>
          {this.props.monthText}
        </Text>
      </View>
    );
  }
}

//make this component available to the app
export default MonthItem;

MonthItem.propTypes = {
  monthText: PropTypes.string,
  textWidth: PropTypes.number
};

MonthItem.defaultProps = {
  monthText: ""
};
