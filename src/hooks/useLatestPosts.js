import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      allWpPost(
        filter: { postSettings: { featuredPost: { ne: "yes: Yes" } } }
      ) {
        nodes {
          postSettings {
            featuredPost
          }
          title
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
            }
          }
          excerpt
          categories {
            nodes {
              link
              name
            }
          }
        }
      }
    }
  `)

  return data
}
