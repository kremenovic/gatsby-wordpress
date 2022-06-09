import React from "react"
import SideNavigation from "../SideNavigation/SideNavigation"
import MobileNavigation from "../MobileNavigation/MobileNavigation"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <MobileNavigation />
      <SideNavigation />
      <div className="main">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
