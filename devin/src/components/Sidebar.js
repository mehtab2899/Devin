import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import img1 from "../assets/images/logo.png"
import Aos from "aos"
import "aos/dist/aos.css"

const Sidebar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <WorkLeft data-aos="fade-right">
      <WorkLogo to="/">
        <div>
          <WorkImg src={img1} />
        </div>
      </WorkLogo>
      <WorkItems>
        <WorkLinks to="">
          <h1>CORAL</h1>
          <p>Founder / Product Management / Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>asu list</h1>
          <p>Founder / Product Management / Design</p>
        </WorkLinks>
        <WorkLinks to="/honeydu">
          <h1>honeydu</h1>
          <p>Founder / Product Management / Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>daru wishkey</h1>
          <p>start up advising/ Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>aniwa</h1>
          <p>startup advising / Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>team ifa</h1>
          <p>Product Management / Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>Jonathan allen</h1>
          <p>Product Management / Design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>tae crowder</h1>
          <p>project management</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>nick dorian</h1>
          <p>project management</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>delgado aerials</h1>
          <p>project management / design</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>bliss</h1>
          <p>co-founder / business strategy</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>313 energy</h1>
          <p>partner / operations & project Management</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>libersher racing</h1>
          <p>social media</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>@technews</h1>
          <p>social media</p>
        </WorkLinks>
        <WorkLinks to="/">
          <h1>usa estate plan</h1>
          <p>engineering / prototyping</p>
        </WorkLinks>
      </WorkItems>
    </WorkLeft>
  )
}

export default Sidebar

const WorkLeft = styled.div`
  width: 22%;
  position: fixed;
  background: #000;
  height: 100%;
  float: left;
  overflow-y: scroll;
  background-attachment: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const WorkLogo = styled(Link)`
  text-align: center;
`

const WorkImg = styled.img`
  width: 120px;
  height: 68px;
`

const WorkItems = styled.div`
  display: block;
  padding: 1rem 1rem;
`

const WorkLinks = styled(Link)`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    display: inline;
  }

  p {
    font-size: 0.7rem;
    text-transform: capitalize;
    padding: 0.2rem 0 1.5rem;
  }
`
