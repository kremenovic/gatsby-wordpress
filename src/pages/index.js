import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import FeaturedPostSlider from "../components/FeaturedPostSlider/FeaturedPostSlider"
import Container from "../components/Container/Container"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import LatestPosts from "../components/LatestPosts/LatestPosts"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FeaturedPostSlider />
    <Container>
      <SectionTitle>Latest Posts</SectionTitle>
      <LatestPosts />
    </Container>
  </Layout>
)

export default IndexPage
