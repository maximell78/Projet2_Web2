import React from 'react';
import { login } from '../utils';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div>
            <h1>Accès au compte</h1>

            <button onClick={() => handleLogin()}>Se connecter</button>
        </div>
    );
};

export default SignIn;