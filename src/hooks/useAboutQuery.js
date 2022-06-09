import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      wpPage(databaseId: { eq: 10 }) {
        homeAbout {
          aboutme
        }
        id
      }
    }
  `)

  return data
}
