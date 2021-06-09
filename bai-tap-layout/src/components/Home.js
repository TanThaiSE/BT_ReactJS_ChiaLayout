import React, { Component } from 'react';
import Header from './Header';
import ListIphone from './ListIphone';
import ListLaptop from './ListLaptop';
import Promotion from './Promotion';
import Slide from './Slide';

class Home extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header/>
                <Slide/>
                <ListIphone/>
                <ListLaptop/>
                <Promotion/>
            </div>
        );
    }
}

export default Home;