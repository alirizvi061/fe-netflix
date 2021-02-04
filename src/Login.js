import React, {useCallback, useContext} from 'react'
import {withRouter, Redirect} from 'react-router'
import './AuthModal.css'
import app from "./base"
import { AuthContext } from "./Auth"

function Login({props, history}) {
    
    const handleLogin = useCallback(
        
        async event => {
            event.preventDefault();

            const { email, password } = event.target.elements;
            try{
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                    history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]

    )

    const { currentUser } = useContext(AuthContext);

    if (currentUser){
        return <Redirect to = '/' />
    }

    return (
        <div className="signupModal">
            <h1> Login </h1>
            <form onSubmit={handleLogin} >
                <input type="text" placeholder="email" name='email'/>
                <input type="password" placeholder="password" name='password'/>
                <input type="submit" value="Log In" />
            </form>

        </div>
    )
}

export default withRouter(Login);
