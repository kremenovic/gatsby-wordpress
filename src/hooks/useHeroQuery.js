import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
      wpPage(databaseId: { eq: 10 }) {
        id
        homeHeader {
          headertitle
          headertext
          headerimg {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  return data
}
