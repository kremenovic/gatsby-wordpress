import React from "react"
import { useFeaturedPostsQuery } from "../../hooks/useFeaturedPosts"
import DesktopSlider from "./DesktopSlider"
import MobileSlider from "./MobileSlider"

const FeaturedPostSlider = () => {
  const { allWpPost } = useFeaturedPostsQuery()

  return (
    <div className="slider container max-w-full bg-white">
      <MobileSlider allWpPost={allWpPost} />
      <DesktopSlider allWpPost={allWpPost} />
    </div>
  )
}

export default FeaturedPostSlider
