import React from "react"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import img1 from "../assets/images/honeydu/h1.png"
import img2 from "../assets/images/honeydu/h2.png"
import img3 from "../assets/images/honeydu/h3.png"
import img4 from "../assets/images/honeydu/h4.jpg"
import img5 from "../assets/images/honeydu/h5.png"
import img6 from "../assets/images/honeydu/h6.png"
import { GlobalStyle } from "../components/styles/GlobalStyles"

const honeydu = () => {
  return (
    <>
      <GlobalStyle />
      <HoneyduContainer>
        <HoneyduLeft>
          <Sidebar />
        </HoneyduLeft>
        <TopBar />
        <HoneyduRight>
          <ProjectDetails data-aos="fade-right">
            <h2>PROJECT NAME</h2>
            <h1>HONEYDU</h1>
            <p>Product Management / Design</p>
          </ProjectDetails>
          <ProjectDesc data-aos="fade-left">
            <div>
              <h2>DISCIPLINES</h2>
              <p>
                Product Management <br /> UI/UX Design
              </p>
            </div>
            <div>
              <h2>DESCRIPTION</h2>
              <p>
                Coral is a QR code based <br /> food ordering app for
                restaurants
              </p>
              <p to="/">
                https://coralapp.io <br /> <span>Link to Roadmap</span>
              </p>
            </div>
          </ProjectDesc>
        </HoneyduRight>
        <HoneyduMain data-aos="fade-up">
          <MainImg src={img1} className="pt-5" />
          <MainContent>
            <div className="row">
              <div
                className="col-lg-3 col-md-3 col-sm-12 col-10"
                data-aos="fade-right"
              >
                <h2>The challenge</h2>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 col-10">
                <p data-aos="fade-left">
                  The challenge The challenge The challenge The challenge The
                  challenge The challenge The challenge The challenge The
                  challenge The challenge The challenge The challenge The
                  challenge The challenge The challenge The challenge
                </p>
                <h2 data-aos="fade-left">Launch Product</h2>
              </div>
            </div>
          </MainContent>

          <MainCenter>
            <div className="row">
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-10"
                data-aos="fade-up"
              >
                <img src={img2} alt="" />
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-10"
                data-aos="fade-up"
              >
                <img src={img3} alt="" />
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-10"
                data-aos="fade-up"
              >
                <img src={img4} alt="" />
              </div>
            </div>
          </MainCenter>
          <MainPara>
            <div data-aos="fade-up">
              <h1>
                B2b payments for compaines <br /> to pay + get paid online
              </h1>
              <p>
                The platform offers parents or guaidians analytical and data{" "}
                <br />
                Reports to help guide the chlid's progress,imporve the learning
                <br /> Process, and add new subjects.
              </p>
            </div>

            <img data-aos="fade-up" src={img5} alt="" className="my-5 py-5" />
            <div className="row" data-aos="fade-up">
              <div className="col-lg-6 col-md-6 col-sm-12 col-10">
                <img src={img6} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-10 pt-5">
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-6 col-md-6 col-sm-12 col-10">
                <img src={img6} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-10 pt-5">
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-6 col-md-6 col-sm-12 col-10">
                <img src={img6} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-10 pt-5">
                <img src={img6} alt="" />
              </div>
            </div>
          </MainPara>
        </HoneyduMain>
      </HoneyduContainer>
    </>
  )
}

export default honeydu

const HoneyduContainer = styled.div``

const HoneyduLeft = styled.div`
  width: 22%;
  float: left;
`

const HoneyduRight = styled.div`
  float: right;
  width: 78%;
  display: flex;
  justify-content: space-between;
`
const ProjectDetails = styled.div`
  padding: 5rem 2rem;
  font-weight: bold;
  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: bold;
  }
`
const ProjectDesc = styled.div`
  display: flex;
  padding: 5rem 0rem;

  div {
    padding: 0 1rem;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    font-size: 0.7rem;
    font-weight: normal;
  }

  span {
    border-bottom: 1px solid #000;
  }
`

const HoneyduMain = styled.div`
  padding: 2rem 2rem;
  float: right;
  width: 78%;
`

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`

const MainContent = styled.div`
  padding: 4rem 1rem;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const MainCenter = styled.div`
  padding: 10rem 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`
const MainPara = styled.div`
  padding: 0rem 2rem;

  h1 {
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
  }

  img {
    width: 100%;
  }
`
