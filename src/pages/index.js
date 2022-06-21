import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import FeaturedPostSlider from "../components/FeaturedPostSlider/FeaturedPostSlider"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FeaturedPostSlider />
  </Layout>
)

export default IndexPage
