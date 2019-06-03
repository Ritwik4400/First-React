/**
 * @format
 */


// Import library to create components
import React, { Component } from 'react'
import {AppRegistry, Text, View, StyleSheet, Button, Alert, TextInput, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import SplashScreen from './src/components/SplashScreen'
import Router from './src/Router'
import { Actions } from 'react-native-router-flux'

//Create stylesheet
const styles = StyleSheet.create({
    headerView: {
        // flex: 1,
        height: 60,
        backgroundColor: '#F8F8FF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2},   //width=0 means no shadow on left/right, height=1 gives some shadow top and bottom
        shadowOpacity: 0.2,
        elevation: 2,
        // position: 'relative',
    },
    //copied style props from documentation of react native (for testing only)
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        // margin: 20
        alignItems: 'stretch',
        marginBottom: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
    padding: 20,
    color: 'white'
    },
});
  
  
// Create component(s)
export default class MainApp extends Component {

    // constructor() {
    //     super();
    //     this.state={ isVisible: true };
    // }

    // hide_splash_screen = () => {
    //     this.setState({isVisible: false});
    // }

    // componentDidMount() {
    //     var that = this;
    //     setTimeout(function() {
    //         that.hide_splash_screen();
    //     }, 5000);
    // }
      
    _onPressButton() {
        // Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert("You just long-pressed!")
    }

    constructor(props) {
        super(props);
        this.state = {text: " "};
    }

    render() {
        <Router />
        // if (this.state.isLoading) {
        //   return <SplashScreen />;
        // }
        

        // { (this.state.isVisible === true) ? SplashScreen : null } 
    
        return (
        <View style={{flex:1, backgroundColor: '#4F6D7A'}}>
            <View style={styles.headerView}>
                <Header headerText = {"This is Header!!"} />
                {/* <AlbumList /> */}
            </View>
            {/* <View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: 'steelblue', width: 90, height: 60 }} /> */}
            <View style={{height: 100, flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </View>
            <TextInput style={{height: 70, fontSize: 35,color: "white"}} placeholder="Type some text here!" placeholderTextColor="#F5FCFF" onChangeText={(text) => this.setState({text})} />
            <Text style={{padding: 10, fontSize: 60, color: "white"}}>
                {this.state.text.split(' ').map((word) => word && '²').join(' ')}
            </Text>
            <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.buttonContainer}>
                    <Button
                    onPress={this._onPressButton}
                    title="Press Me" />
                </View>
            </TouchableNativeFeedback>

            <TouchableOpacity onLongPress={this._onLongPressButton} style={{alignItems: 'center'}}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

// const App = () => (
//     <Text>Some Text</Text>
// );



// Render it to a device (not used when using direct command line 'create-react-native')
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('myapp', ()=>MainApp);