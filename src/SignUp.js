import React, {useCallback} from 'react'
import './AuthModal.css'
import app from './base'
import { withRouter } from "react-router"

function SignUp({history}) {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app 
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="signupModal">
            <h1> SIGNUP </h1>
            <form onSubmit = {handleSignUp}>
                <input type="text" placeholder="email" name="email"/>
                <input type="password" placeholder="password" name="password"/>
                <input type="submit" value="Sign Up"/>
            </form>

        </div>
    )
}

export default withRouter(SignUp);
