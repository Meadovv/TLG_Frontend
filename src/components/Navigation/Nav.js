import React from 'react';

function Nav(props) {
    return (
        <div>
            <div clasName="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>

        </div>
    );
}

export default Nav;