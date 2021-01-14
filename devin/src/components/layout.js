import React from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
