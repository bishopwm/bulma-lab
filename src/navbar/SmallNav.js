import React, { Component } from 'react';
import '../navbar/SmallNav.css';

class SmallNav extends Component {
    render() {
        return (
            <div>
                <nav id="small-nav" className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                    <h1 id="signup-heading">Signup Form</h1>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                        Home
                        </a>
                        <a className="navbar-item">
                        Documentation
                        </a>
                    </div>
                    </div>
                 </nav>
            </div>
        );
    }
}

export default SmallNav;