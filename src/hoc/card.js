import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Card = (props) => {

    const style = {
        background:'lightgray'
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Card;