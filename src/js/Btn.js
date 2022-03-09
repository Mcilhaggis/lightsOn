import React from 'react';


export default function Btn({id, selectLight}) {
    return (

        <button className="btn" id={id} onClick={() => selectLight(id)} >Light Up</button>



    )
}
