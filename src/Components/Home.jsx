
import React from "react";
import HomeImg from '../Images/Home1.svg'
import Common from "./HomeComp";

const Home = () => {

  return (
    <>
      <Common
        heading="Want To Grow You Bussiness With"
        highlight="Rectify"
        para="We Have The Top Experts From The Industries Which Help You To Grow Faster."
        img={HomeImg}
        btn="Our Services"
        visit="/services"
      />
    </>
  )
}

export default Home;