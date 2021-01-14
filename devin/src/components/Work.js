import React from "react"
import styled from "styled-components"
import WorkStories from "./WorkStories"
import { WorkData } from "./WorkData"

const Work = () => {
  return (
    <WorkContainer>
      <h2>MY WORK</h2>
      <WorkStory>
        {WorkData.map((val, ind) => {
          return (
            <WorkStories to="/work" key={ind} img={val.img} title={val.title} />
          )
        })}
      </WorkStory>
    </WorkContainer>
  )
}

export default Work

const WorkContainer = styled.div`
  padding: 3rem 10rem 0;
  position: relative;
  z-index: 2000;
  background: #fff;

  h2 {
    padding-bottom: 1rem;
    font-weight: bold;
  }
`
const WorkStory = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 820px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid lightgray;
    padding: 0.1rem;
  }
`
