import React from "react"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const PostItems = ({ data }) => {
  return (
    <>
      {data.nodes.map((item, index) => {
        const {
          title,
          uri,
          excerpt,
          featuredImage: {
            node: {
              localFile: { childImageSharp },
            },
          },
        } = item
        const imageData = getImage(childImageSharp.gatsbyImageData)
        const bgImage = convertToBgImage(imageData)

        return (
          <article className="post-item" key={index}>
            <div className="item-image h-64 w-full">
              <Link to={uri} className="hover:cursor-pointer">
                <BackgroundImage
                  Tag="div"
                  {...bgImage}
                  className="h-full w-full object-cover"
                  style={{ backgroundSize: "cover", backgroundPositionY: "0" }}
                ></BackgroundImage>
              </Link>
            </div>
            <div className="item-header">
              <div className="category">
                <p className="py-3 text-linkColor text-sm">Recomended X & Y</p>
              </div>
              <div className="title mb-3">
                <Link
                  to={uri}
                  className="text-secondaryColor text-lg font-bold capitalize hover:text-linkColor hover:cursor-pointer"
                >
                  {title}
                </Link>
              </div>

              <div
                className="text-justify item-content text-secondaryColor"
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              ></div>
              <div className="readMore text-linkColor mt-3 pb-3">
                <Link to={uri}>Read More...</Link>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default PostItems
