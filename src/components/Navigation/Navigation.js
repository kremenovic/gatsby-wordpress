import React, { useEffect } from "react"
import { Link } from "gatsby"
import NavigationIcons from "../NavigationIcons/NavigationIcons"

const Navigation = ({ menu, setMenuOpen, menuOpen }) => {
  const handleCloseNavigation = () => {
    if (menuOpen === true) {
      setMenuOpen(false)
      console.log(menuOpen)
    }
  }

  return (
    <ul>
      {menu.map(item => {
        return (
          <li key={item.id} className={item.cssClasses[0]}>
            <Link
              to={item.url}
              activeClassName="nav-active"
              onClick={handleCloseNavigation}
            >
              <NavigationIcons iconClass={item.cssClasses[0]} />
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
