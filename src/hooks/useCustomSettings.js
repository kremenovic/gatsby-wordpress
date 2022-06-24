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
                gatsbyImageData(
                  width: 500
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          favicon {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          aboutMeImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return data
}
