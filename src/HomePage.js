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
import SingleColorHorizontoalItem from "./SingleColorHorizontoalItem";
import DataResult from "./utils/DataResult";
const window = Dimensions.get("window");
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import MonthItem from "./MonthItem";
import LinearGradient from "react-native-linear-gradient";

// create a component
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divHeight: "0%",
      DataList: DataResult.DataList
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
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            zIndex: 0
          }}
        >
          <FlatList
            data={this.state.DataList}
            numColumns={6}
            contentContainerStyle={{
              justifyContent: "center",
              alignContent: "center"
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <View>
                  <SingleColorHorizontoalItem
                    mainDivHeight={320}
                    mainDivWidth={50}
                    mainDivBackgroundColor={"#272c35"}
                    childDivHeight={item.number}
                    text={item.number}
                  />
                </View>
              </View>
            )}
          />
          <View style={SingleHorizontalBarStyle.lineBorder} />

          <FlatList
            data={this.state.DataList}
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
        <LinearGradient
          // colors={["transparent", "rgba(255, 0, 0, 1.0)", "transparent"]}
          // colors={['#272c35', '#272c35', '#272c35']}
          colors={["rgba(39,44,53,0.4)", "rgba(39,44,53,0.0)"]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.linearGradient}
        />
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
export default HomePage;
