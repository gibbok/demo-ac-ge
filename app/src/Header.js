import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

/* 
 * Main app header.
 */
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <img src={logo} className="header__logo" alt="logo" />
                <h1 className="header__title">React Task List</h1>
            </div>
        );
    }
}

export default Header;
