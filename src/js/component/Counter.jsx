import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const Counter= ({seconds})=>{
   

    return <div>
        <div className="card text-white bg-light mb-3 p-2 mx-3" style={{width: "80px", height: "100px", border: "1px solid black"}}>
            <div className="card-body d-flex justify-content-center align-items-center p-0" >
                <h2 style={{fontSize: "60px", color: "black"}}>{seconds}</h2>
            </div>
        </div>
    </div>
}

export default Counter 