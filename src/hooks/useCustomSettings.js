import { useStaticQuery, graphql } from "gatsby"

export const useCustomSettingsQuery = () => {
  const data = useStaticQuery(graphql`
    query customSettingsQuery {
      wpPage(title: { eq: "Custom Settings" }) {
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
