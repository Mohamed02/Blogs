import React from 'react';
import { addBlog } from '../../store/blog-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BlogFormReview = (props) => {
  const navigate= useNavigate();
  const blogToReview= useSelector(state => state.blog.blogUnderReview);
  const dispatch = useDispatch();

  const renderFields=()=>{
    return <div>{ Object.keys(blogToReview).map((key)=><div><label>{key}</label><div>{blogToReview[key]}</div></div>)}</div>
  }
  const renderButtons= () => {
    const { cancelReview } = props;
    return (
      <div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={cancelReview}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }

  const onSubmit= (event) => {
    event.preventDefault();
    dispatch(addBlog(blogToReview));
    navigate('/blogs');
  }

  return (
    <form onSubmit={onSubmit.bind(this)}>
      <h5>Please confirm your entries</h5>
      {renderFields()}
      {renderButtons()}
    </form>
  );
}

export default BlogFormReview