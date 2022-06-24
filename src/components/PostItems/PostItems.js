import React, { useEffect } from "react"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const PostItems = ({ data, archiveData }) => {
  let newData
  if (!archiveData) {
    newData = data.nodes
  } else {
    newData = archiveData
  }
  return (
    <>
      {newData.map((item, index) => {
        const {
          title,
          uri,
          excerpt,
          categories,
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
              <div className="category py-3">
                <Link
                  to={categories?.nodes[0]?.link}
                  className=" text-linkColor text-sm"
                >
                  {categories?.nodes[0].name}
                </Link>
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
