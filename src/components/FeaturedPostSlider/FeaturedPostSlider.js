import React from "react"
import { useFeaturedPostsQuery } from "../../hooks/useFeaturedPosts"
import DesktopSlider from "./DesktopSlider"
import MobileSlider from "./MobileSlider"
import { isMobile, isDesktop } from "react-device-detect"

const FeaturedPostSlider = () => {
  const { allWpPost } = useFeaturedPostsQuery()

  return (
    <div className="slider container max-w-full bg-white">
      {!isDesktop ? (
        <MobileSlider allWpPost={allWpPost} />
      ) : (
        <DesktopSlider allWpPost={allWpPost} />
      )}
    </div>
  )
}

export default FeaturedPostSlider
