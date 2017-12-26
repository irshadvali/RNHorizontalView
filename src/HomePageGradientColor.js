//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  FlatList,
  Dimensions
} from "react-native";
import SeparateGradientItem from "./SeparateGradientItem";
import DataResult from "./utils/DataResult";
const width = Dimensions.get("window").width;
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import MonthItem from "./MonthItem";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

// create a component
class HomePageGradientColor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            width: width,

            zIndex: 0
          }}
        >
          <FlatList
            data={this.props.dataResult}
            numColumns={6}
            contentContainerStyle={{
              justifyContent: "center",

              alignContent: "center"
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <View>
                  <SeparateGradientItem
                    mainDivHeight={320}
                    mainDivWidth={50}
                    mainDivBackgroundColor={"#272c35"}
                    childDivHeight={item.number}
                    text={item.number}
                    itemIndex={index}
                  />
                </View>
              </View>
            )}
          />
          <View style={SingleHorizontalBarStyle.lineBorder} />

          <FlatList
            data={this.props.dataResult}
            numColumns={6}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <View>
                  <MonthItem monthText={item.month} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272c35",
    position: "absolute"
  },
  linearGradient: {
    backgroundColor: "transparent",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%"
  }
});

//make this component available to the app
export default HomePageGradientColor;
HomePageGradientColor.propTypes = {
  dataResult: PropTypes.object
};
HomePageGradientColor.defaultProps = {
  dataResult: null
};
