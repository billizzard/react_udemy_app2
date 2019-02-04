import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Card from '../hoc/card'
import Auth from '../hoc/auth'

const Profile = (props) => {
    const redir = () => {
        return (
            //<Redirect from='/profile' to='/'/>
            props.history.push('/')
        )
    }

    return (
        <Auth>
            <Card>
                <Link to={{
                    pathname: `${props.match.url}/posts`
                }}>go to posts</Link>
            </Card>
        </Auth>
    )
}

export default Profile;