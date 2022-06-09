import React from "react"
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaLightbulb,
  FaPhone,
} from "react-icons/fa"

const NavigationIcons = iconClass => {
  if (iconClass.iconClass === "homeItem") {
    return <FaHome />
  }
  if (iconClass.iconClass === "aboutItem") {
    return <FaUserAlt />
  }
  if (iconClass.iconClass === "workItem") {
    return <FaBriefcase />
  }
  if (iconClass.iconClass === "servicesItem") {
    return <FaLightbulb />
  }
  if (iconClass.iconClass === "contactItem") {
    return <FaPhone />
  }
  return <></>
}

export default NavigationIcons
