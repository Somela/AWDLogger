//import React from 'react';
//import { Route } from 'react-router';
//import Layout from './components/Layout';
//import Home from './components/Home';
//import Application from './components/Application';

//export default () => (
//  <Layout>
//        <Route exact path='/' component={Home} />
//        <Route exact path="/applications/:appID?" component={Application} />
//  </Layout>
//);
import React, { Component } from 'react';
import './Stylesheets/Home.css';
import Applications from './components/list-of-Applications';


class Home extends Component {
    render() {
        return (
            <div>
                <Applications />
            </div>
        );
    }
}

export default Home;