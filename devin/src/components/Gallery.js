import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGalleryJson {
        edges {
          node {
            alt
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getGallery = data => {
    const Gallery = []
    data.allGalleryJson.edges.forEach((item, index) => {
      Gallery.push(
        <GalleryCard key={index}>
          <GalleryLink to="https://instagram.com/deepeeches">
            <GalleryImg
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
          </GalleryLink>
        </GalleryCard>
      )
    })
    return Gallery
  }

  return (
    <GalleryContainer>
      <h1>SOCIAL</h1>
      <GalleryHeading>See what I'm up to</GalleryHeading>
      <GalleryLogo>
        <InstaLink to="https://instagram.com/deepeeches">
          <FaInstagram />
        </InstaLink>
      </GalleryLogo>
      <GalleryWrapper data-aos="fade-left">{getGallery(data)}</GalleryWrapper>
    </GalleryContainer>
  )
}

export default Gallery

const GalleryContainer = styled.div`
  padding: 5rem 0;
  z-index: 3000;
  background: #fff;
  position: relative;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
  }
`

const GalleryHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  margin: 0rem 0 0rem;
  text-align: center;
`

const GalleryLogo = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
`

const InstaLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
  }
`

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0rem 10rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryCard = styled.div`
  width: 100%;
  height: 300px;
`
const GalleryLink = styled(Link)``

const GalleryImg = styled.img`
  height: 100%;
  width: 100%;
`
