import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MainApp from '../../index';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "powderblue",
    },
    splashText: {
        color: "red",
        fontSize: 40, 
        fontWeight: 'bold',
    },
    TouchableOpacity_Style:{
        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'
    },
});

export default class SplashScreen extends Component {
    // componentWillMount() {
    //     setTimeout(() => {
    //         this.props.navigation.navigate('MainApp')
    //     }, 1000);
    // }
    render() {    
      return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity = {0.5}
                style={styles.TouchableOpacity_Style}
                onPress={MainApp.hide_splash_screen}>
                    <Text style={styles.splashText}>
                            "QuicKBus!"
                    </Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  