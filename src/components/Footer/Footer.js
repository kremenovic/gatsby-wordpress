import React from "react"

import { useFooterQuery } from "../../hooks/useFooterQuery"
import { useCustomSettingsQuery } from "../../hooks/useCustomSettings"
import NavigationItems from "../NavigationItems/NavigationItems"
import Socials from "../Socials/Socials"

const Footer = () => {
  const { wpMenu, site } = useFooterQuery()
  const { wpPage: settings } = useCustomSettingsQuery()
  let currentDate = new Date().getFullYear()

  return (
    <div className="footer container max-w-full bg-primaryColor">
      <div className="container max-w-7xl  flex justify-between  text-white mx-auto py-10 px-5 lg:px-23 lg:flex-col ">
        <div className="navigation flex flex-col space-y-3 pb-8 lg:flex-col lg:text-left lg:space-x-0 lg:space-y-2 ">
          <h3 className="text-xl underline underline-offset-8 pb-3 font-medium lg:text-left">
            About
          </h3>
          <div
            className="max-w-sm lg:text-left"
            dangerouslySetInnerHTML={{
              __html: settings.customSettings.aboutMeWidget,
            }}
          ></div>
        </div>

        <div className="navigation flex flex-col space-y-3 pb-8 lg:flex-col lg:text-left lg:space-x-0 lg:space-y-2 ">
          <h3 className="text-xl underline underline-offset-8 pb-3 font-medium lg:text-left">
            Quick Links
          </h3>
          <NavigationItems menu={wpMenu.menuItems.nodes} />
        </div>

        <div className="navigation flex flex-col space-y-3 pb-8 lg:flex-col lg:text-left lg:space-x-0 lg:space-y-2">
          <h3 className="text-xl underline underline-offset-8 pb-3 font-medium">
            Socials
          </h3>
          <Socials />
        </div>
        <div className="navigation flex flex-col space-y-3 pb-8 lg:flex-col lg:text-left lg:space-x-0 lg:space-y-2">
          <h3 className="text-xl underline underline-offset-8 pb-3 font-medium">
            Disclaimer
          </h3>
          <div
            className="max-w-sm"
            dangerouslySetInnerHTML={{
              __html: settings.customSettings.disclaimer,
            }}
          ></div>
        </div>
      </div>
      <p className="text-white text-center text-sm py-3 bg-secondaryColor">
        @{currentDate} - {site.siteMetadata.title} - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
