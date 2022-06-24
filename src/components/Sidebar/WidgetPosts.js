import React from "react"
import { useSidebarWidgetPostsQuery } from "../../hooks/useSidebarWidgetPosts"
import PostItems from "../PostItems/PostItems"
const WidgetPosts = () => {
  const { allWpPost: posts } = useSidebarWidgetPostsQuery()
  return (
    <div className="widget-posts">
      <PostItems data={posts} />
    </div>
  )
}

export default WidgetPosts
