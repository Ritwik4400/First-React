//Import libraries to make component
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

//Create stylesheet for component to use
const styles = StyleSheet.create({
    mainHead: {
        color: 'steelblue',
        fontSize: 25,
        alignContent: 'center',
        fontWeight: 'bold',
    },
    border: {
        color: 'black',
        fontSize: 20,
    },
});

//Create component
// export default class Header extends Component
const Header = (props) => {
    // render(props) {
        return(
            // <Text style={styles.mainHead}>This is a Header!</Text>
            <Text style={styles.mainHead}>{ props.headerText }</Text>
        );
    // }
}

//Make the component available to other apps
//if using "const Header = () => { <code> }, then only write this"
//no need to write id using export 
export default Header;