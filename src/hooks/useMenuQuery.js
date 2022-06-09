import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query navigationQuery {
      wpMenu(databaseId: { eq: 144 }) {
        name
        menuItems {
          nodes {
            cssClasses
            id
            label
            url
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data
}
