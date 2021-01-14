import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Work from "../components/Work"
import Resume from "../components/Resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Work />
    <Resume />

    <Gallery />
  </Layout>
)

export default IndexPage
