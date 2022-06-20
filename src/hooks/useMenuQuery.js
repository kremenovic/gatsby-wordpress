import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query navigationQuery {
      wpMenu(databaseId: { eq: 33 }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)
  return data
}
