import React from 'react';

function Button (props){
        return(
            <button 
                onClick={props.caller}
                className = {props.isActive}
            >
                <i className={props.iconClassName}></i>
            </button>
        )
}

export default Button