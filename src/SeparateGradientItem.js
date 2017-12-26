//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import PropTypes from "prop-types";
import ColorList from "./utils/ColorList";

// create a component
class SeparateGradientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childDivHeight: "0%",
      MulliColorListTwo: ColorList.MulliColorListTwo
    };
    //  this._listYear = this._listYearMonth.bind();
  }

  componentWillMount() {
    this.setState({
      divHeight: this.props.childDivHeight
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
      <View style={SingleHorizontalBarStyle.container}>
        <View
          style={{
            height: this.props.mainDivHeight,
            width: this.props.mainDivWidth,
            backgroundColor: this.props.mainDivBackgroundColor
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: this.props.childDivHeight,
              textAlign: "center",
              color: "#fff"
            }}
          >
            {this.props.text}
          </Text>
          {/* <Animated.View style={[styles.childDiv,animatedStyle]}></Animated.View> */}
          <View
            style={[
              SingleHorizontalBarStyle.childDiv,
              {
                height: this.props.childDivHeight,
                width: this.props.mainDivWidth,
                backgroundColor: this.state.MulliColorListTwo[
                  this.props.itemIndex
                ]
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

//make this component available to the app
export default SeparateGradientItem;

SeparateGradientItem.propTypes = {
  mainDivHeight: PropTypes.number,
  mainDivWidth: PropTypes.number,
  mainDivBackgroundColor: PropTypes.string,
  childDivHeight: PropTypes.number,
  text: PropTypes.string,
  itemIndex: PropTypes.number
};

SeparateGradientItem.defaultProps = {
  mainDivHeight: 0,
  mainDivWidth: 0,
  mainDivBackgroundColor: null,
  childDivHeight: 0,
  text: 0
};
