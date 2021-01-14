import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../assets/images/resume/fb.jpg"
import img2 from "../assets/images/resume/ig.png"
import img3 from "../assets/images/resume/go.png"

const ImageSlider = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
  }

  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <img src={img1} alt="" />
          <div className="details">
            <h2>facebook</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={img2} alt="" />
          <div className="details">
            <h2>Instagram</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card custom">
          <img src={img3} alt="" />
          <div className="details  custom-details">
            <h2>GROUPON</h2>
          </div>
        </div>
        <div className="works">
          <WorkLink to="/work">
            <h5>Check out my portfolio.</h5>
          </WorkLink>
          <WorkLink to="https://www.linkedin.com/in/devinpicciolini/">
            <p>or download my full resume.</p>
          </WorkLink>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={img2} alt="" />
          <div className="details">
            <h2>Instagram</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={img3} alt="" />
          <div className="details">
            <h2>GROUPON</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper ">
        <div className="card custom">
          <img src={img1} alt="" />
          <div className="details custom-details">
            <h2>facebook</h2>
          </div>
        </div>
        <div className="works">
          <WorkLink to="/work">
            <h5>Check out my portfolio.</h5>
          </WorkLink>
          <WorkLink to="https://www.linkedin.com/in/devinpicciolini/">
            <p>or download my full resume.</p>
          </WorkLink>
        </div>
      </div>
    </Slider>
  )
}

export default ImageSlider

const WorkLink = styled(Link)`
  text-decoration: none;
`
