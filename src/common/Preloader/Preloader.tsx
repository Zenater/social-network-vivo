import React from 'react';
import loading from "../../assests/img/loading.gif";

const Preloader = () => {
    return (
        <div style={{backgroundColor:'white'}}>
             <img src={loading}/>
        </div>
    );
};

export default Preloader;