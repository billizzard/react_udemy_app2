import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Auth = (props) => {
    const pass = 'password123';
    if (pass != 'password123') {
        return <h3>You are not authorized</h3>
    } else {
        return props.children
    }
}


export default Auth;