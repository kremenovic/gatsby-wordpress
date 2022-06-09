import React from "react"

import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>
        &copy; Copyright {currentYear} Stefan Kremenovic. All Rights Reserved.
      </p>
      <div className="socials">
        <a
          href="https://www.facebook.com/kremenovic.stefan"
          rel="noreferrer"
          title="Facebook"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/stefan-kremenovic-8b832b15b/"
          rel="noreferrer"
          title="Linkedin"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com/stefan_kremenovic/"
          rel="noreferrer"
          title="Instagram"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/kremenovic"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
