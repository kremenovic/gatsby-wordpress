import React from "react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import NavigationItems from "../NavigationItems/NavigationItems"

const MobileNavigation = () => {
  const { wpMenu } = useMenuQuery()

  return <NavigationItems menu={wpMenu.menuItems.nodes} />
}

export default MobileNavigation
