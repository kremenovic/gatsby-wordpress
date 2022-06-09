import React from "react"
import { FaAngleDown } from "react-icons/fa"
const Button = props => {
  return (
    <div className={props.classes}>
      <a href={props.link}>
        <FaAngleDown /> {props.text}
      </a>
    </div>
  )
}

export default Button
