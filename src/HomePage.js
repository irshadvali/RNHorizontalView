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
import MonthItem from "./MonthItem"

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
                    mainDivBackgroundColor={"#e6e6e6"}
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
                  <MonthItem
                    monthText={item.month}
                  />
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
    backgroundColor: "#ffffff",
    paddingTop: 30
  }
});

//make this component available to the app
export default HomePage;
