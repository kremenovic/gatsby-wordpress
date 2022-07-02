import React, { useState, useEffect } from "react"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
const DesktopSlider = ({ allWpPost }) => {
  const [firstSlides, setFirstSlides] = useState([])

  const [slide, setSlide] = useState(0) // used for infinite slide effect

  const handleGetFirstSlides = () => {
    let newArr = allWpPost.nodes.slice(0, 3)
    setFirstSlides(newArr)
    setSlide(0)
  }

  const handleNextSlide = () => {
    let newArr = allWpPost.nodes.slice(3, 6)
    setFirstSlides(newArr)
    setSlide(1)
    if (slide === 1) {
      handleGetFirstSlides()
    }
  }

  const handlePrevSlide = () => {
    handleGetFirstSlides()
    if (slide === 0) {
      handleNextSlide()
    }
  }

  useEffect(() => {
    handleGetFirstSlides()
  }, [setFirstSlides])

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
    <div className="desktop-container container relative max-w-7xl mx-auto py-5 px-5 lg:px-23">
      {allWpPost.nodes.length === 6 && (
        <div className="navigation-slider">
          <div className="navigation-slider-prev" onClick={handlePrevSlide}>
            <FaAngleLeft />
          </div>
          <div className="navigation-slider-next" onClick={handleNextSlide}>
            <FaAngleRight />
          </div>
        </div>
      )}
      <div className="slider-container grid grid-cols-3 lg:grid-cols-2">
        <div className="slider-1-col col-span-2 ... lg:col-span-3 ...">
          <a href={firstSlides[0]?.uri} className="slide">
            <div id="overlay"></div>

            <BackgroundImage
              Tag="div"
              {...bgImage}
              className="slide-content"
              style={{ backgroundSize: "cover", backgroundPositionY: "0" }}
            >
              <p>{firstSlides[0]?.title}</p>
            </BackgroundImage>
          </a>
        </div>
        <div className="slider-rest-col ... lg:col-span-2">
          <a href={firstSlides[1]?.uri} className="slide">
            <div id="overlay"></div>
            <BackgroundImage
              Tag="div"
              {...bgImage1}
              className="slide-content"
              style={{ backgroundSize: "cover", backgroundPositionY: "0" }}
            >
              <p>{firstSlides[1]?.title}</p>
            </BackgroundImage>
          </a>
          <a href={firstSlides[2]?.uri} className="slide">
            <div id="overlay"></div>
            <BackgroundImage
              Tag="div"
              {...bgImage2}
              className="slide-content"
              style={{ backgroundSize: "cover", backgroundPositionY: "0" }}
            >
              <p>{firstSlides[2]?.title}</p>
            </BackgroundImage>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DesktopSlider
