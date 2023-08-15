
import React from "react";
import Common from "./AboutComp";
import AboutImg from '../Images/About.webp'


const About = () => {

  return (
    <>
      <Common
        heading="I'm Himanshu A MERN FULL"
        highlight=" Stack Developer"
        para="My self Himanshu prajapati, i am a full stack developer and youtuber. check out my protfoilo below."
        img={AboutImg}
        btn="Protfolio"
        visit="#"
      />
    </>
  )
}

export default About;