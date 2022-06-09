import React, { useState } from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { site, wpMenu: menu } = useMenuQuery()

  return (
    <div className="mobileNavigation">
      <div className="mobileNavigation-items">
        <Link to="/">
          <StaticImage
            src="../../images/logo.png"
            alt={site.siteMetadata.title}
            placeholder="tracedSVG"
            layout="constrained"
          />
        </Link>
        <FaBars onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <nav id="mainMenu" className={menuOpen ? "activeMobileMenu" : null}>
        <Navigation
          menu={menu.menuItems.nodes}
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        />
      </nav>
    </div>
  )
}

export default MobileNavigation
