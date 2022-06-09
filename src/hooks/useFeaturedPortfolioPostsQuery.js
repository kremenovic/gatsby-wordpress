import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedPortfolioPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query featuredPortfolioQuery {
      allWpPortfolio(
        sort: { fields: date, order: DESC }
        filter: { portfolio: { featured: { eq: true } } }
      ) {
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
