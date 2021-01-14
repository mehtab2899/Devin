import React from "react"
import styled from "styled-components"
import img1 from "../assets/images/resume/rs.png"
import ImageSlider from "./ImageSlider"

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeHeading>career</ResumeHeading>
      <ResumeWrapper>
        <ResumeCard>
          <img className="res" src={img1} alt="" />
        </ResumeCard>
        <ResumeCard className="boxes">
          <div className="px-5 carousel">
            <ImageSlider />
          </div>
        </ResumeCard>
      </ResumeWrapper>
    </ResumeContainer>
  )
}
export default Resume

const ResumeContainer = styled.div`
  z-index: 3000;
  position: relative;
  background-color: #fff;
`

const ResumeHeading = styled.div`
  padding: 1rem 10rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
`
const ResumeWrapper = styled.div``
const ResumeCard = styled.div`
  padding-left: 2rem;

  img.res {
    width: 142px;
    background-color: #fff;
    z-index: 1000;
    height: 633px;
    position: absolute;
    top: -21%;
    left: 0%;
  }
`
