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
                  gatsbyImageData(
                    width: 500
                    layout: CONSTRAINED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
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
