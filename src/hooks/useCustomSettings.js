import { useStaticQuery, graphql } from "gatsby"

export const useCustomSettingsQuery = () => {
  const data = useStaticQuery(graphql`
    query customSettingsQuery {
      wpPage(databaseId: { eq: 62 }) {
        customSettings {
          aboutMeWidget
          disclaimer
          facebook
          twitter
          youtube
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
          favicon {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  return data
}
