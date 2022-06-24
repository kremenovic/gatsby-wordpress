import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Container from "../components/Container/Container"
import PostItems from "../components/PostItems/PostItems"
import paginate from "../utils/utils"

const ArchiveTemplate = ({ data }) => {
  const [page, setPage] = useState(0)

  let paginationArray = paginate(data.allWpPost.nodes, [page])
  let numberOfPages = paginate(data.allWpPost.nodes)

  const handlePage = index => {
    setPage(index)
  }

  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1
      if (nextPage > numberOfPages.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = numberOfPages.length - 1
      }
      return prevPage
    })
  }

  return (
    <Layout>
      <Seo
        title={`${data.allWpPost.nodes[0].categories.nodes[0].name} - Category`}
      />
      <meta property="og:type" content="page" />
      <meta
        property="og:url"
        content={data.allWpPost.nodes[0].categories.nodes[0].link}
      />
      <Container>
        <div className="page-title text-center uppercase font-bold text-secondaryColor text-2xl mb-5">
          <h1>{data.allWpPost.nodes[0].categories.nodes[0].name}</h1>
        </div>
        <div className="category-posts">
          <PostItems archiveData={paginationArray} />
        </div>
        {numberOfPages.length > 1 && (
          <div className="pagination text-primaryColor font-bold">
            <button className="pagination-prev" onClick={prevPage}>
              Prev
            </button>
            {numberOfPages.map((item, index) => {
              return (
                <button
                  className={`pagination-btn ${
                    index === page ? "active-pagination-btn" : ""
                  }`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className="pagination-next" onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default ArchiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      limit: $limit
    ) {
      nodes {
        id
        title
        uri
        excerpt
        slug
        categories {
          nodes {
            link
            name
          }
        }
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
            seo {
              title
              metaDesc
              opengraphImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
