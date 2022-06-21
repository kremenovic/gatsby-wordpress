import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useFeaturedPostsQuery } from "../../hooks/useFeaturedPosts"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const FeaturedPostSlider = () => {
  const { allWpPost } = useFeaturedPostsQuery()
  const [firstSlides, setFirstSlides] = useState([])

  const handleGetFirstSlides = () => {
    let a = allWpPost.nodes.slice(0, 3)
    setFirstSlides(a)
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

  const bgImage = convertToBgImage(
    getImage(
      firstSlides[0]?.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData
    )
  )

  const bgImage1 = convertToBgImage(
    getImage(
      firstSlides[1]?.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData
    )
  )

  const bgImage2 = convertToBgImage(
    getImage(
      firstSlides[2]?.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData
    )
  )
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

              <BackgroundImage Tag="div" {...bgImage} className="slide-content">
                <p>{firstSlides[0]?.title}</p>
              </BackgroundImage>
            </Link>
          </div>
          <div className="slider-rest-col ...">
            <Link to={firstSlides[1]?.uri} className="slide">
              <div id="overlay"></div>
              <BackgroundImage
                Tag="div"
                {...bgImage1}
                className="slide-content"
              >
                <p>{firstSlides[1]?.title}</p>
              </BackgroundImage>
            </Link>
            <Link to={firstSlides[2]?.uri} className="slide">
              <div id="overlay"></div>
              {/* <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${firstSlides[2]?.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`,
                }}
              >
                <p>{firstSlides[2]?.title}</p>
              </div> */}
              <BackgroundImage
                Tag="div"
                {...bgImage2}
                className="slide-content"
              >
                <p>{firstSlides[2]?.title}</p>
              </BackgroundImage>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostSlider
