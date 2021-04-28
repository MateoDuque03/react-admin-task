import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'

class Navigation extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.google.com/">Task <Badge variant="secondary">
                            { this.props.count }
                        </Badge></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;