import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Helmet } from "react-helmet"
import { useCustomSettingsQuery } from "../../hooks/useCustomSettings"

const Layout = ({ children }) => {
  const { wpPage: settings } = useCustomSettingsQuery()
  const faviconImage =
    settings.customSettings.favicon.localFile.childImageSharp.gatsbyImageData
      .images.fallback.src
  return (
    <>
      <Helmet>
        <link rel="icon" href={faviconImage} />
      </Helmet>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
