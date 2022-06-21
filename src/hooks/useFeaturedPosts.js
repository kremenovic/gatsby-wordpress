import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query featuredPostsQuery {
      allWpPost(
        filter: { postSettings: { featuredPost: { eq: "yes: Yes" } } }
        limit: 6
      ) {
        nodes {
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
          content
          categories {
            nodes {
              name
            }
          }
          seo {
            metaDesc
            title
          }
        }
      }
    }
  `)

  return data
}
