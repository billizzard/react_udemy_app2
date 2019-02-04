import React from 'react';

const Conditional = () => {
    const value = true;

    const returnValue = () => {
        return false
    }

    const showIt = () => {
        return (
            returnValue() ?
                <div>
                    true
                </div>
                :
                <div>
                    false
                </div>
        )
    }

    return (
        <div>
            {showIt()}
        </div>
    )
}

export default Conditional;