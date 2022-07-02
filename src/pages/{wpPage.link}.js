import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Container from "../components/Container/Container"

const PageTemplate = ({ data }) => {
  const {
    wpPage: {
      content,
      link,
      title,
      seo: {
        metaDesc,
        title: metaTitle,
        opengraphImage: {
          localFile: {
            childImageSharp: { gatsbyImageData },
          },
        },
      },
    },
  } = data

  const graphImage = gatsbyImageData.images.fallback.src
  return (
    <Layout>
      <Seo title={metaTitle} description={metaDesc} />
      <meta
        property="og:image"
        content={graphImage ? graphImage : "featured image is not added"}
      />
      <meta property="og:type" content="page" />
      <meta property="og:url" content={link} />
      <Container>
        <div className="page-title text-center uppercase font-bold text-secondaryColor text-2xl mb-5">
          <h1>{title}</h1>
        </div>
        <div
          className="text-justify page-content text-secondaryColor"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Container>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query SinglePageQuery($id: String!) {
    wpPage(id: { eq: $id }, link: { nin: "/custom-settings" }) {
      link
      title
      id
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      content
    }
  }
`
