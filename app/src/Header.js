import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <img src={logo} className="header__logo" alt="logo" />
                <h2>React Task List</h2>
            </div>
        );
    }
}

export default Header;
