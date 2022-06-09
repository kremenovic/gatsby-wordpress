import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import Button from "../Button/Button"
const HeroArea = () => {
  const {
    wpPage: { homeHeader: data },
  } = useHeroQuery()
  const imageData = getImage(data.headerimg.localFile)
  return (
    <div className="heroArea">
      <div className="heroArea__image">
        <GatsbyImage image={imageData} alt="hero image" />
      </div>
      <div className="heroArea__text">
        <h1>{data.headertitle}</h1>
        <p>{data.headertext}</p>
        <Button link={"#about"} classes={"btn btn--lg"} text={"Learn More"} />
      </div>
    </div>
  )
}

export default HeroArea
