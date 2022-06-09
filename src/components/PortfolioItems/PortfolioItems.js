import React, { useRef } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaLink } from "react-icons/fa"
const PortfolioItems = ({ data, port }) => {
  return (
    <div className="featuredPortfolio">
      {data.map((item, index) => {
        const {
          title,
          uri,
          id,
          featuredImage: {
            node: {
              localFile: { childImageSharp },
            },
          },
        } = item.node
        const imageData = getImage(childImageSharp.gatsbyImageData)

        return (
          <Link to={`${uri}`} key={id} ref={port}>
            <GatsbyImage image={imageData} alt={title} />
            <div className="featuredPortfolio__link">
              <FaLink />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PortfolioItems
