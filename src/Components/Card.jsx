
import React from "react";
import { NavLink } from 'react-router-dom'
// import Sdata from "./Sdata";


const Card = (props) => {



    return (
        <>
            <div className=" col-md-6 col-lg-4 col-10 mx-auto ">
                <div className="card" >
                    <img src={props.imgSrc} className="card-img-top" alt="service-img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.Service}</h5>
                        <p className="card-text">{props.Info}</p>
                        <NavLink to="/about" id="CardBtn" className="btn btn-primary">Check Out</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;