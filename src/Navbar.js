import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="nav">
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"            
            />

            <img
            className="nav__avatar"
            src="https://pm1.narvii.com/6915/b750d3766167c6d41dfd8f55e45f72631d100409r1-320-320v2_hq.jpg"
            alt="Netflix avatar "            
            />
            
        </div>
    )
}

export default Navbar
