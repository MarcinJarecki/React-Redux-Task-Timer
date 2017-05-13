import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-bottom">
                <div className="container footer-navbar">
                    <a href="https://github.com/MarcinJarecki" ><FontAwesome name='github' size='2x' /> </a>
                    <a href="https://pl.linkedin.com/in/marcinjarecki" ><FontAwesome name='linkedin-square' size='2x' /> </a>
                </div>
            </div>
        )
    }
}

export default Footer;