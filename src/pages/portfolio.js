import React from "react"
import { Link } from "gatsby"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import AllPortfolioPosts from "../components/AllPortfolioPosts/AllPortfolioPosts"
const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="content-section content-section--white portfolio-section">
        <h3>My Portfolio</h3>
        <AllPortfolioPosts />
      </div>
    </Layout>
  )
}

export default Portfolio
