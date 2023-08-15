


import React from "react";
import { NavLink } from 'react-router-dom'

  
const Common = (props) => {

  return (
    <>
      <section id="header" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div id="HeadText" className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" >
                  <h1>{props.heading}<span> {props.highlight}</span> </h1>
                  <h5 className="my-2" >{props.para}</h5>
                  <NavLink className="my-3 ServeBtn" to={props.visit}>{props.btn}</NavLink>
                </div>
                 <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-end  ">
                  <img src={props.img} className="img-fluid animate d-flex justify-content-center" alt="bg-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;