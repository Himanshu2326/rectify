

import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {


    return (
        <>

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="my-4 Heading">
                            <h2>Our Services</h2>
                        </div>
                        <div className="row gy-5 Service-part">
                            {
                                Sdata.map((val, ind) => {
                                    return (
                                        <Card
                                            key={ind}
                                            imgSrc={val.imgsrc}
                                            Service={val.service}
                                            Info={val.info}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;