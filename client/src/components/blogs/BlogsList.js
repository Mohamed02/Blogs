import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchBlogs} from '../../store/blog-actions';
import { Link } from 'react-router-dom';

const BlogsList = () => {
   const dispatch= useDispatch();
   const blogs = useSelector(state => state.blog.blogs);
    useEffect(()=>{
        dispatch(fetchBlogs());
    },[dispatch]);
  return (
    <>
    {blogs.map((blog)=>{
      return <div className="card darken-1 horizontal" key={blog._id}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{blog.title}</span>
              <p>{blog.content}</p>
            </div>
            <div className="card-action">
              <Link to={`/blogs/${blog._id}`}>Read</Link>
            </div>
          </div>
        </div>
    })}
    </>
   
  )
}

export default BlogsList