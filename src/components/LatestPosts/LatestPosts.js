import React from "react"
import { useLatestPostsQuery } from "../../hooks/useLatestPosts"
import PostItems from "../PostItems/PostItems"

const LatestPosts = () => {
  const { allWpPost: posts } = useLatestPostsQuery()

  return (
    <div className=" grid grid-cols-2 gap-x-7 gap-y-12  lg:grid-cols-1">
      <PostItems data={posts} />
    </div>
  )
}

export default LatestPosts
