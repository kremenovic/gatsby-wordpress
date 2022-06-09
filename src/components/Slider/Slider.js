import React, { useState, useEffect, useRef } from "react"
import { useAllPortfolioPostsQuery } from "../../hooks/useAllPortfolioPostsQuery"
import PortfolioItems from "../PortfolioItems/PortfolioItems"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const Slider = () => {
  const {
    allWpPortfolio: { edges: data },
  } = useAllPortfolioPostsQuery()

  const [scroll, setScroll] = useState(0)

  const sliderContainer = useRef()
  const portfolioItem = useRef()

  const nextSlide = () => {
    let sliderContainerWidth = portfolioItem.current.offsetWidth
    sliderContainer.current.scrollLeft += sliderContainerWidth + 30
  }

  const prevSlide = () => {
    let sliderContainerWidth = portfolioItem.current.offsetWidth
    sliderContainer.current.scrollLeft -= sliderContainerWidth + 30
  }

  useEffect(() => {
    setScroll(sliderContainer.current.scrollWidth)
  }, [])

  return (
    <div className="slider">
      <h4>See more projects</h4>
      <div className="slider-content" ref={sliderContainer}>
        <PortfolioItems data={data} port={portfolioItem} />
      </div>
      <div className="slider-nav">
        <button type="button" onClick={prevSlide} className="leftNav">
          <FaChevronLeft />
        </button>
        <button type="button" onClick={nextSlide} className="rightNav">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Slider
