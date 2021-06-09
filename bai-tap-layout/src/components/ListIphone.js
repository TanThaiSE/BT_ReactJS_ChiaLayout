import React, { Component } from 'react';
import Iphone from './Iphone';

class ListIphone extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <Iphone/>
            </section>
        );
    }
}

export default ListIphone;