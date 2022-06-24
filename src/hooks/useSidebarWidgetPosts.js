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
