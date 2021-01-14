import React, { useEffect } from "react"
import styled from "styled-components"
import "aos/dist/aos.css"
import Aos from "aos"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import img1 from "../assets/images/about/devin.png"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <AboutContainer id="about">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-10">
          <AboutImg data-aos="fade-right">
            <Img src={img1} />
          </AboutImg>
        </div>
        <div className="col-lg-8 col-md 8 col-sm-12 col-10">
          <AboutDesc data-aos="fade-left">
            <h2>ABOUT</h2>
            <h1>How it all started.</h1>
            <h6>
              I am currently spending my time between San Francisco and Los
              Angeles, California. I created my first product in my dorm at
              Arizona State University to solve a problem and after some brief
              virality was hooked. Since then I have founded startups, worked in
              FAANG and have coached various startups on setting up workflows
              and business strategy. <br /> <br /> Currently, I am energetic
              about solving human problems at scale. Facebook & Instagram have
              provided me the resources to support the teams launching some
              incredible features like Instagram Business profiles and I spend
              most Of my time building internal tools and helping solve SMB's
              issues through strategic smart support tools.
              <br />
              <br />
              If you are looking for help launching your next world changing
              idea, or need advice as a start up. Come talk to me.
            </h6>
          </AboutDesc>
        </div>
      </div>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  padding: 8rem 5rem 5rem;
  z-index: 1000;
  position: relative;
  background-color: #fff;
`

const AboutImg = styled.div``
const Img = styled.img`
  width: 330px;
  height: 320px;
  border-radius: 50%;
`
const AboutDesc = styled.div`
  h1 {
    padding: 0.7rem 0 1rem;
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h6 {
    font-weight: normal;
    font-size: 1rem;
  }
`
