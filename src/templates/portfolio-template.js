import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaExternalLinkAlt, FaLongArrowAltLeft } from "react-icons/fa"
import { Link } from "gatsby"
import Slider from "../components/Slider/Slider"

const PortfolioTemplate = ({ data: { allWpPortfolio: portfolio } }) => {
  const {
    title,
    categories,
    content,
    id,
    portfolio: { previewimage, projecturl },
  } = portfolio.nodes[0]

  const imageData = getImage(
    previewimage.localFile.childImageSharp.gatsbyImageData
  )
  return (
    <Layout>
      <Seo title={title} />
      <div className="content-section content-section--grey single-portfolio">
        <Link to="/portfolio" className="backBtn">
          <FaLongArrowAltLeft /> Back
        </Link>

        <div className="container">
          <GatsbyImage image={imageData} alt={title} />
          <div className="portfolio-content">
            <h4>Project Description</h4>
            <div
              className="portfolio-content__description"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>
            <h4>Project Details</h4>
            <div className="portfolio-content__details box">
              <h5>
                Title: <span>{title}</span>
              </h5>
            </div>
            <div className="portfolio-content__details box">
              <h5>
                Skills Needed:{" "}
                {categories.nodes.map((category, index) => {
                  return (
                    <span key={index}>
                      {(index ? ", " : "") + category.name}
                    </span>
                  )
                })}
              </h5>
            </div>
            <div className="portfolio-content__details box">
              <h5>
                Project URL:{" "}
                <span>
                  <a
                    href={projecturl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEE LIVE <FaExternalLinkAlt />
                  </a>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePortfolio($uri: String!) {
    allWpPortfolio(filter: { uri: { eq: $uri } }) {
      nodes {
        title
        id
        categories {
          nodes {
            name
          }
        }
        portfolio {
          projecturl
          previewimage {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
        content
      }
    }
  }
`

export default PortfolioTemplate
