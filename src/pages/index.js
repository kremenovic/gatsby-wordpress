import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import FeaturedPostSlider from "../components/FeaturedPostSlider/FeaturedPostSlider"
import Container from "../components/Container/Container"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import LatestPosts from "../components/LatestPosts/LatestPosts"
const IndexPage = ({ data }) => (
  <Layout>
    <Seo
      title={data.wpPage.seo.opengraphTitle}
      description={data.wpPage.seo.metaDesc}
    />
    <meta
      property="og:image"
      content={
        data.wpPage.featureadImage
          ? data.wpPage.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData.images.fallback.src
          : "featured image is not added"
      }
    />
    <meta property="og:type" content="page" />
    <meta property="og:url" content={data.wpPage.uri} />
    <FeaturedPostSlider />
    <Container>
      <SectionTitle>Latest Posts</SectionTitle>
      <LatestPosts />
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    wpPage(link: { eq: "/custom-settings/" }) {
      seo {
        metaDesc
        opengraphTitle
      }
      uri
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
