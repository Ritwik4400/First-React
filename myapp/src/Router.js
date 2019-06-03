import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import AlbumList from './components/AlbumList'
import Header from './components/header'
import MainApp from '../index';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="mainpage" component={MainApp} title="MainPage" initial />
                <Scene key="albumList" component={AlbumList} title="List" />
                <Scene key="header" component={Header} title="Heading"/>
            </Scene>
        </Router>
    );
}

export default RouterComponent;