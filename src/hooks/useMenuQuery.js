import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query navigationQuery {
      wpMenu(name: { eq: "Primary" }) {
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
