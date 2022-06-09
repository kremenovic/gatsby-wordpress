import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import HeroArea from "../components/HeroArea/HeroArea"
import About from "../components/About/About"
import Button from "../components/Button/Button"
import FeaturedPortfolioPosts from "../components/FeaturedPortfolioPosts/FeaturedPortfolioPosts"
const IndexPage = () => (
  <Layout>
    <Seo title="Stefan Kremenović - Web Design & Search Engine Optimization" />
    <HeroArea />
    <About />
    <div className="content-section content-section--grey" id="work">
      <h2>Work.</h2>
      <h3>RECENTLY FINISHED.</h3>
      <FeaturedPortfolioPosts />
      <Button link={"/portfolio"} classes="btn btn--full" text={"View All"} />
      <Button link={"#services"} classes="btn" text={"Services"} />
    </div>
    <div className="content-section content-section--dark" id="services">
      <h2>Services.</h2>
      <h3>THESE ARE SERVICES I MAY PROVIDE.</h3>
      <div className="service-list">
        <div className="service-list__box">
          <h5>01. WEB DESIGN.</h5>
          <div className="separator"></div>
          <p>
            Modern Web Design will beat your competition. Web site will be done
            only when I like it 100 %.
          </p>
        </div>
        <div className="service-list__box">
          <h5>02. GRAPHIC DESIGN.</h5>
          <div className="separator"></div>
          <p>
            If you need a logo, business card or any other graphic content – I
            can provide that for you.
          </p>
        </div>
        <div className="service-list__box">
          <h5>03. SEO & MARKETING.</h5>
          <div className="separator"></div>
          <p>
            The website is not worth any penny if it’s not visible on the
            Google.
          </p>
        </div>
      </div>
    </div>
    <Button link={"#contact"} classes="btn btn--full" text={"Get in touch"} />
    <div className="content-section content-section--white" id="contact">
      <h2>Contact.</h2>
      <h3>GET IN TOUCH.</h3>
      <p>
        If you would like to work with me or you have any question please feel
        free to contact me. You can use contact form or send me email directly
        to <a href="mailto:stefan@kremenovic.com">stefan@kremenovic.com</a>
      </p>
      <p>
        For those who don’t like emails
        <a href="tel:+38766521334"> +387 66 521 334</a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
