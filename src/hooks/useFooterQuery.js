import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      wpMenu(databaseId: { eq: 88 }) {
        name
        menuItems {
          nodes {
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
