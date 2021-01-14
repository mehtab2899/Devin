import React, { useEffect } from "react"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Aos from "aos"

const Work = () => {
  useEffect(() => {
    Aos.init(3000)
  }, [])
  return (
    <>
      <GlobalStyle />
      <WorkContainer>
        <Sidebar />
        <TopBar />
        <WorkRight>
          <div data-aos="zoom-in-right">W</div>
          <div data-aos="zoom-in-up">O</div>
          <div data-aos="zoom-in-down">R</div>
          <div data-aos="zoom-in-left">K</div>
        </WorkRight>
      </WorkContainer>
    </>
  )
}

export default Work

const WorkContainer = styled.div``

const WorkRight = styled.div`
  padding: 5rem 20rem 0;
  text-align: center;
  font-size: 18rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`
