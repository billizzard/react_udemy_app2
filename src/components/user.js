import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Card from '../hoc/card'
import Auth from '../hoc/auth'
import userHoc from '../hoc/userHoc'

const User = (props) => {
    console.log(props);
    return (
        <div>
            User1
        </div>
    )
}

export default userHoc(User, 'Hello ');