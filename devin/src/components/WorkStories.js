import React from "react"
import styled from "styled-components"

export default function WorkStories(props) {
  return (
    <WorkStory>
      <div>
        <img src={props.img} alt="img" />
        <h6>{props.title}</h6>
      </div>
    </WorkStory>
  )
}

const WorkStory = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h6 {
    padding-top: 0.3rem;
  }
`
