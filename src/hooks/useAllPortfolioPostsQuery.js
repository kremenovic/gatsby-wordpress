import { useStaticQuery, graphql } from "gatsby"

export const useAllPortfolioPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query allPortfolioPostsQuery {
      allWpPortfolio(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            uri
            id
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data
}
