import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useCustomSettingsQuery } from "../../hooks/useCustomSettings"
import SectionTitle from "../SectionTitle/SectionTitle"

const Sidebar = () => {
  const { wpPage: settings } = useCustomSettingsQuery()

  const {
    customSettings: { aboutMeImage, aboutMeWidget, disclaimer },
  } = settings

  const imageData = getImage(aboutMeImage.localFile.childImageSharp)

  return (
    <aside className="sidebar">
      <div className="widget text-primaryColor text-center mb-5">
        <SectionTitle>About Me</SectionTitle>
        <GatsbyImage
          image={imageData}
          alt="test"
          className="rounded-full lg:max-[150px] max-w-xs"
        />
        <div
          className="p-3 text-center"
          dangerouslySetInnerHTML={{
            __html: aboutMeWidget,
          }}
        ></div>
      </div>

      <div className="widget text-primaryColor text-center mb-5">
        <SectionTitle>Recent Posts</SectionTitle>
      </div>
      <div className="widget text-primaryColor text-center mb-5">
        <SectionTitle>Disclaimer</SectionTitle>
        <div
          className="p-3 text-center"
          dangerouslySetInnerHTML={{
            __html: disclaimer,
          }}
        ></div>
      </div>
    </aside>
  )
}

export default Sidebar
