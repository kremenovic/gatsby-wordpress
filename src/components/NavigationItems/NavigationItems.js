import React from "react"
import { Link } from "gatsby"

const NavigationItems = ({ menu, menuOpen, setMenuOpen }) => {
  const handleCloseNavigation = () => {
    if (menuOpen === true) {
      setMenuOpen(false)
    }
  }
  return (
    <>
      {menu.map(item => {
        return (
          <Link
            key={item.id}
            to={item.url}
            activeClassName="activeLink"
            onClick={handleCloseNavigation}
            className="hover:text-linkColor"
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )
}

export default NavigationItems
