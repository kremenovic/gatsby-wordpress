import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Button from "../components/Button/Button"
const NotFoundPage = () => (
  <Layout>
    <Seo title="404 page" />
    <div className="content-section content-section--grey error">
      <h3>Oops, This Page Could Not Be Found!</h3>
      <h4>Error 404</h4>
      <Button link={"/"} classes="btn" text={"Go to homepage"} />
    </div>
  </Layout>
)

export default NotFoundPage
