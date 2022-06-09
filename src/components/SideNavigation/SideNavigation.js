import React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"
import { StaticImage } from "gatsby-plugin-image"

const SideNavigation = () => {
  const { site, wpMenu: menu } = useMenuQuery()

  return (
    <div className="sideNavigation">
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../../images/logo.png"
            alt={site.siteMetadata.title}
            placeholder="BLURRED"
            layout="constrained"
          />
        </Link>
      </div>
      <nav id="mainMenu">
        <Navigation menu={menu.menuItems.nodes} />
      </nav>
    </div>
  )
}

export default SideNavigation
