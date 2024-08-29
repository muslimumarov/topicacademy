import React from 'react';

function Card ({img, span, button, desc, endbutton, endspan}) {
    return(
        <div className="card">
            <img src={img} alt="" className="card-img"/>
            <div className="card-inner-wrap">
                <span className="card-span">{span}</span>
                <button className="card-button">{button}</button>
            </div>
            <p className="card-desc">{desc}</p>
            <div className="card-end-wrap">
                <button className="card-endButton">{endbutton}</button>
                <span className="end-span">{endspan}</span>
            </div>
        </div>
    )


     };
export default Card;