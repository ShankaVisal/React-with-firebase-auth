import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

function Home({user}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActivate, setIsSignUpActivate] = useState(true);

    const handleChange = () => {
        setIsSignUpActivate(!isSignUpActivate);
    }

    const handleSignUp = (event) => {
        if(!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleSignIn = (event) => {
        if(!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    if (user){
        return <Navigate to='/private'></Navigate>
    }

    return (
        <section>
            <h2>Home Page</h2>
            <form>
                {isSignUpActivate && <legend>Sign Up</legend>}
                {!isSignUpActivate && <legend>Sign In</legend>}

                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={handleEmailChange} value={email} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={handlePasswordChange} value={password} />
                        </li>
                    </ul>
                    {isSignUpActivate && <button type="submit" className='button' onClick={handleSignUp}>Sign Up</button>}
                    {!isSignUpActivate && <button type="submit" className='button' onClick={handleSignIn}>Sign In</button>}
                </fieldset>
                {isSignUpActivate && <a onClick={handleChange}>login</a>}
                {!isSignUpActivate && <a onClick={handleChange}>Create an account</a>}
            </form>
        </section>
    );
}

export default Home;
