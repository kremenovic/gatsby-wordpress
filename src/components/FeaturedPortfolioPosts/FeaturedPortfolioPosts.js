import React from "react"
import { useFeaturedPortfolioPostsQuery } from "../../hooks/useFeaturedPortfolioPostsQuery"
import PortfolioItems from "../PortfolioItems/PortfolioItems"

const FeaturedPortfolioPosts = () => {
  const {
    allWpPortfolio: { edges: data },
  } = useFeaturedPortfolioPostsQuery()

  return <PortfolioItems data={data} />
}

export default FeaturedPortfolioPosts
