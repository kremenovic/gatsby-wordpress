import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useCustomSettingsQuery } from "../../hooks/useCustomSettings"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import NavigationItems from "../NavigationItems/NavigationItems"
import MobileNavigation from "../MobileNavigation/MobileNavigation"
import { FaBars } from "react-icons/fa"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { wpPage: settings } = useCustomSettingsQuery()
  const { wpMenu } = useMenuQuery()

  const imageData = getImage(
    settings.customSettings.logo.localFile.childImageSharp
  )
  return (
    <div className="header container max-w-full bg-secondaryColor">
      <div className="container max-w-7xl flex  items-center justify-between text-white mx-auto py-5 px-5 lg:pr-10 lg:px-23">
        <Link to="/">
          <GatsbyImage
            image={imageData}
            alt="test"
            className="lg:max-[150px] max-w-xs"
          />
        </Link>
        <div className="navigation flex space-x-6 lg:hidden">
          <NavigationItems menu={wpMenu.menuItems.nodes} />
        </div>
        <FaBars
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden lg:block text-xl "
        />
      </div>

      <div
        className={
          menuOpen ? "flex flex-col px-10 pb-7 text-white space-y-2 " : "hidden"
        }
      >
        <MobileNavigation
          menu={wpMenu.menuItems.nodes}
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        />
      </div>
    </div>
  )
}

export default Header
