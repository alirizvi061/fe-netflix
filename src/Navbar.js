import React, {useEffect, useState} from 'react'
import "./Navbar.css"
import app from "./base"

import history from './history';


function Navbar(loggedIn) {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            // window.removeEventListener("scroll")
        }
    }, [])

    // const onClick = (() => {
    //     {loggedIn?
    //     history.push("/signup")
    //     :
    //     history.push("/login")
    //     }
    // })

    const signingOut = (() => {
        console.log('Clicked')
        {loggedIn?
        history.push("/signup")
        : 
        console.log('logged out')
        history.push("/")
        }
        app.auth().signOut()
    })

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"            
            />
            {/* <button onClick={() => signingOut()}>Sign Out</button> */}
            <img
            // onClick={onClick}
            className="nav__avatar"
            src="https://pm1.narvii.com/6915/b750d3766167c6d41dfd8f55e45f72631d100409r1-320-320v2_hq.jpg"
            alt="Netflix avatar "            
            />
            

        </div>
    )
}

export default Navbar
 