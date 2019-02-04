import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {
    const redir = () => {
        return (
            //<Redirect from='/profile' to='/'/>
            props.history.push('/')
        )
    }

    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>go to posts</Link>

            {redir()}
        </div>
    )
}

export default Profile;