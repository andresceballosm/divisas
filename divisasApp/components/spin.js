import React from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

export default class Spin extends React.Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }
  componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
        <View style={styles.activityIndicatorWrapper} >
            <Animated.Image
                style={{
                    width: 70,
                    height: 70,
                    transform: [{ rotate: RotateData }],
                }}
                source={require('../assets/icons/spin.png')}
            />
        </View> 
    );
  }
}
 
const styles = StyleSheet.create({
    activityIndicatorWrapper: {
      flex:1,
      marginTop:20
    },
});