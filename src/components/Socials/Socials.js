import React from "react"
import { useCustomSettingsQuery } from "../../hooks/useCustomSettings"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

const Socials = () => {
  const { wpPage: settings } = useCustomSettingsQuery()
  const {
    customSettings: { facebook, twitter, youtube },
  } = settings
  return (
    <div className="flex space-x-5 text-xl lg:text-left">
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-linkColor"
      >
        <FaFacebookF />
      </a>
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-linkColor"
      >
        <FaTwitter />
      </a>
      <a
        href={youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-linkColor"
      >
        <FaYoutube />
      </a>
    </div>
  )
}

export default Socials
