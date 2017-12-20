//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

// create a component
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          divHeight: "0%",
        };
        //  this._listYear = this._listYearMonth.bind();
      }

      componentWillMount(){
          this.setState({
            divHeight:"70%"  
          })
          this.animatedValue= new Animated.Value(0)
      }
      componentDidMount(){
          Animated.timing(this.animatedValue,{
              toValue:50,
              duration:1000,
              easing:Easing.bounce
          }).start()

      }
 render() {
const animatedStyle= {height: this.animatedValue}
   return (
       
     <View style={styles.container}>
     
     <View style={styles.divMain}>
     <Text style={{ position: 'absolute', left: 0, right: 0, bottom: this.state.divHeight,textAlign: 'center'}}>213</Text>
     {/* <Animated.View style={[styles.childDiv,animatedStyle]}></Animated.View> */}
     <View style={[styles.childDiv,{height:this.state.divHeight}]}></View>
     </View>
      <View style={styles.lineBorder}></View>
     </View>
   );
 }
}

// define your styles
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ffffff',
   paddingTop:30,
 },
 lineBorder:{
    width:"100%",
    height:2,
    backgroundColor:"#d00000"
 },
 divMain:{
    width:100,
    height:320,
    backgroundColor:"#e6e6e6"
 },
 childDiv:{
    width:100,
    backgroundColor:"steelblue",
    position: 'absolute', left: 0, right: 0, bottom: 0,
 }
});

//make this component available to the app
export default HomePage;
