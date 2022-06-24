import { useStaticQuery, graphql } from "gatsby"

export const useSidebarWidgetPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query SidebarWidgetPostQuery {
      allWpPost(limit: 5) {
        nodes {
          title
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 150
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP, AVIF]
                  )
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
