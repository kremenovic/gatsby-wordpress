import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useFeaturedPostsQuery } from "../../hooks/useFeaturedPosts"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const FeaturedPostSlider = () => {
  const { allWpPost } = useFeaturedPostsQuery()
  const [firstSlides, setFirstSlides] = useState([])

  const handleGetFirstSlides = () => {
    let a = allWpPost.nodes.slice(0, 3)
    setFirstSlides(a)
    console.log(firstSlides)
  }

  const handleNextSlide = () => {
    let a = allWpPost.nodes.slice(3, 6)
    setFirstSlides(a)
  }

  const handlePrevSlide = () => {
    handleGetFirstSlides()
  }

  useEffect(() => {
    handleGetFirstSlides()
  }, [])

  console.log(allWpPost.nodes)

  // const imageData = getImage(
  //   settings.customSettings.logo.localFile.childImageSharp
  // )
  return (
    <div className="slider container max-w-full bg-white">
      <div className="container relative max-w-7xl  text-red-500 mx-auto py-5 px-5 lg:pr-10 lg:px-23">
        <div className="navigation-slider ">
          <div className="navigation-slider-prev" onClick={handlePrevSlide}>
            <FaAngleLeft />
          </div>
          <div className="navigation-slider-next" onClick={handleNextSlide}>
            <FaAngleRight />
          </div>
        </div>
        <div className="slider-container grid grid-cols-3">
          <div className="slider-1-col col-span-2 ...">
            <Link to={firstSlides[0]?.uri} className="slide">
              <div id="overlay"></div>

              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${firstSlides[0]?.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`,
                }}
              >
                <p>{firstSlides[0]?.title}</p>
              </div>
            </Link>
          </div>
          <div className="slider-rest-col ...">
            <Link to={firstSlides[1]?.uri} className="slide">
              <div id="overlay"></div>
              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${firstSlides[1]?.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`,
                }}
              >
                <p>{firstSlides[1]?.title}</p>
              </div>
            </Link>
            <Link to={firstSlides[2]?.uri} className="slide">
              <div id="overlay"></div>
              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${firstSlides[2]?.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`,
                }}
              >
                <p>{firstSlides[2]?.title}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostSlider
