import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'


class AlbumList extends Component {
    //this method executes automatically, when this particular component is about to be rendered on the screen
    componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums");
    }

    render() {
        return( 
            <View>
                <Text> Sample album AlbumList </Text>
            </View>
        );
    }
}

export default AlbumList;