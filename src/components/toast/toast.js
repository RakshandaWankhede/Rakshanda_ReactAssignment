import React from 'react';
import "./toast.css";

const toast = (props)=>{
    return (
        <div className = {props.visible} >
            {props.message}
        </div>
    )
}

export default toast;