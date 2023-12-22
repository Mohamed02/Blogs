import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const BlogShow = (props) => {
    const { _id } = useParams();
    const blogsList = useSelector((state)=> {
        console.log('state.blog', state.blog);
        return state.blog.blogs
    });
    console.log('blogsList',blogsList);
    const blogDetail = blogsList?.find(blog=>blog._id===_id);
    console.log('blogDetail',blogDetail);
  return (
    <div>
    <h3>{blogDetail.title}</h3>
    <p>{blogDetail.content}</p>
    </div>
  )
}

export default BlogShow