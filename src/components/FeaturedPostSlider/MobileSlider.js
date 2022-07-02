import React, { useState } from "react"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const MobileSlider = ({ allWpPost }) => {
  const [slide, setSlide] = useState(0)

  const checkNumber = number => {
    if (number > allWpPost.nodes.length - 1) {
      return 0
    }
    if (number < 0) {
      return allWpPost.nodes.length - 1
    }
    return number
  }

  const handleNextSlide = () => {
    setSlide(slide => {
      let newSlide = slide + 1
      return checkNumber(newSlide)
    })
  }

  const handlePrevSlide = () => {
    setSlide(slide => {
      let newSlide = slide - 1
      return checkNumber(newSlide)
    })
  }

  const bgImage = convertToBgImage(
    getImage(
      allWpPost.nodes[slide]?.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData
    )
  )
  return (
    <div className="container relative max-w-7xl mx-auto py-5 px-5 lg:px-23">
      {allWpPost.nodes.length === 6 && (
        <div className="navigation-slider">
          <div
            className="navigation-slider-prev"
            onClick={() => handlePrevSlide()}
          >
            <FaAngleLeft />
          </div>
          <div
            className="navigation-slider-next"
            onClick={() => handleNextSlide()}
          >
            <FaAngleRight />
          </div>
        </div>
      )}
      <div className="mobile slider-container grid ">
        <div className="mobile-content">
          <a href={allWpPost.nodes[slide]?.uri} className="slide">
            <div id="overlay"></div>
            <BackgroundImage
              Tag="div"
              {...bgImage}
              className="slide-content"
              style={{
                backgroundSize: "contain",
                backgroundPositionY: "0",
                backgroundRepeat: "repeat",
              }}
            >
              <p>{allWpPost.nodes[slide]?.title}</p>
            </BackgroundImage>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileSlider
