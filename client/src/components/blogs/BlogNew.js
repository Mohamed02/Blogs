import React,{ useState } from 'react'
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview'

const BlogNew = () => {

  const [reviewStatus, setReviewStatus]= useState(false)
  return (
    <div>
        {!reviewStatus && <BlogForm reviewBlog={()=>setReviewStatus(true)}/> }
        {reviewStatus &&  <BlogFormReview cancelReview={()=>setReviewStatus(false)}/> }
    </div>
    
  )
}

export default BlogNew