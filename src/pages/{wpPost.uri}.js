import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Container from "../components/Container/Container"

const PostTemplate = ({ data }) => {
  const {
    title,
    content,
    uri,
    featuredImage: {
      node: {
        localFile: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
    seo: { metaDesc, opengraphTitle: metaTitle },
  } = data.allWpPost.nodes[0]
  const imageData = getImage(gatsbyImageData)
  const graphImage = gatsbyImageData.images.fallback.src

  return (
    <Layout>
      <Seo
        title={metaTitle ? metaTitle : title}
        description={metaDesc ? metaDesc : "Add meta description using Yoast"}
      />
      <meta
        property="og:image"
        content={graphImage ? graphImage : "featured image is not added"}
      />
      <meta
        property="twitter:description"
        content={metaDesc ? metaDesc : "featured image is not added"}
      />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={uri} />
      <Container>
        <div className="post-title text-left uppercase font-bold text-secondaryColor text-2xl mb-6">
          <h1>{title}</h1>
        </div>
        <div className="post-image mb-5">
          <GatsbyImage image={imageData} alt="logo" />
        </div>
        <div
          className="text-justify post-content text-secondaryColor"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Container>
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query getSinglePost($uri: String!) {
    allWpPost(filter: { uri: { eq: $uri } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 850
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        uri
        seo {
          metaDesc
          opengraphTitle
        }
      }
    }
  }
`
