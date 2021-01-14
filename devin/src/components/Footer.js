import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer id="footer">
      <FooterLeft>{year} DEVIN PICCIOLINI</FooterLeft>
      <FooterRight>
        <div>
          <h3>SOCIAL</h3>
          <SocialLink to="https://www.linkedin.com/in/devinpicciolini/">
            Linkedin
          </SocialLink>
          <SocialLink to="https://instagram.com/deepeeches">
            Instagram
          </SocialLink>
        </div>
        <div>
          <h3>CONTACT</h3>
          <span>dpicciolini@gmail.com</span>
        </div>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem 3rem;
  z-index: 5000;
  background: #fff;
  position: relative;
`

const FooterLeft = styled.div`
  font-size: 0.8rem;
  float: left;
  color: #000;
`

const FooterRight = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  div {
    padding: 0 2rem 2rem;
    h3 {
      font-size: 0.8rem;
      font-weight: bold;
    }
    span {
      font-size: 1rem;
      display: block;
    }
  }
`

const SocialLink = styled(Link)`
  font-size: 1rem;
  display: block;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
  }
`
