import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import img1 from "../assets/images/hero/logo.png"
import img2 from "../assets/images/hero/girl.png"

const Hero = () => {
  return (
    <div className="">
      <HeroContainer>
        <HeroLogoLink to="/">
          <Img src={img1} />
        </HeroLogoLink>
        <HeroContent>
          <HeroBg>
            <p className="heroP">
              <span className="hero-span1">.</span>
              <span className="hero-span2">
                <em>online </em>
              </span>
              🚀 (currently, solving problems at
              <span className="hero-span3">
                <FaFacebook />
              </span>
              )
            </p>
            <Img src={img2} className="hero-img1" />
            <div data-aos="zoom-in">
              <h1>Devin</h1>
            </div>
          </HeroBg>

          <HeroText>
            <p className="hero-left" data-aos="fade-up-right">
              <HeroLink to="#about"> learn more about me</HeroLink>
            </p>
            <p className="hero-right" data-aos="fade-up-left">
              <HeroLink to="/work">view my work</HeroLink>
            </p>
          </HeroText>

          <HeroDesc data-aos="fade-up">
            Hi
            <span role="img" aria-label="jsx-a11y/aria-proptypes">
              👋
            </span>
            , I am Devin. I am an engineer based in Los Angeles obsessed with
            product management, technology, business and humans. My passion is
            crafting elegant products.
          </HeroDesc>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero

const HeroContainer = styled.div`
  color: #000;
  min-height: 130vh;
  background-color: #fde231;
  background-attachment: fixed;
`
const HeroContent = styled.div`
  padding: 15rem 0;
`

const HeroLogoLink = styled(Link)`
  padding: 2rem;
  position: absolute;
  top: 0%;
  left: 0%;
`
const HeroBg = styled.div`
  text-align: center;

  h1 {
    font-size: 15rem;
    color: #fff;
    position: absolute;
    left: 45%;
    top: 45%;
    transform: translate(-42%, -45%);
    z-index: 10;
  }
`

const Img = styled.img`
  z-index: 20;
`
const HeroText = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`
const HeroLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #000;
    border-bottom: 3px solid #000;
  }
`
const HeroDesc = styled.div`
  color: #fff;
  position: absolute;
  background-color: transparent;
  top: 100%;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  padding: 0 3rem;
  letter-spacing: 0.2rem;
  z-index: 100;
`
