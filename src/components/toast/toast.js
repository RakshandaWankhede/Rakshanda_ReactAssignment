import React from 'react';
import "./toast.scss";

const toast = (props)=>{
   const { message } = props;
    return (
        <div className="toastMsg">
            {message}
        </div>
    );
};

export default toast;