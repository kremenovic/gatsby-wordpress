import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      wpMenu(name: { eq: "Footer" }) {
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
