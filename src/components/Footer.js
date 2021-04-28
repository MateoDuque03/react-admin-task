import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return (
            <footer className="bg-dark text-center text-lg-start bg-dark text-white fixed-bottom">
                <div className="text-center p-3">
                    © 2021 Copyright: 
                    <a className="text-white text-decoration-none" href="https://github.com/MateoDuque03"> Duvan Mateo Duque Urrea</a>
                </div>
            </footer>
        );
    }
}

export default Footer;