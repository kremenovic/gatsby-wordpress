import React from "react"
import { useAllPortfolioPostsQuery } from "../../hooks/useAllPortfolioPostsQuery"
import PortfolioItems from "../PortfolioItems/PortfolioItems"
const AllPortfolioPosts = () => {
  const {
    allWpPortfolio: { edges: data },
  } = useAllPortfolioPostsQuery()
  return (
    <div>
      <PortfolioItems data={data} />
    </div>
  )
}

export default AllPortfolioPosts
