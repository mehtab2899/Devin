import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TopBar = () => {
  return (
    <WorkItems1>
      <WorkLinks1
        to="/work"
        css={`
          color: #e8eae6;
        `}
      >
        work
      </WorkLinks1>
      <WorkLinks1 to="/#about">about</WorkLinks1>
      <WorkLinks1 to="/#footer">contact</WorkLinks1>
    </WorkItems1>
  )
}

export default TopBar

const WorkItems1 = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 10rem 0 0;
`

const WorkLinks1 = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
`
