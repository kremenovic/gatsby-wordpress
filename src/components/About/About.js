import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import Button from "../Button/Button"

const About = () => {
  const {
    wpPage: { homeAbout: data },
  } = useAboutQuery()

  return (
    <>
      <div className="content-section content-section--white" id="about">
        <h2>About.</h2>
        <h3>A FEW WORDS ABOUT ME.</h3>
        <div dangerouslySetInnerHTML={{ __html: data.aboutme }}></div>
        <Button link={"#work"} classes="btn" text={"Work"} />
      </div>
    </>
  )
}

export default About
