import 'materialize-css/dist/css/materialize.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import BlogField from './BlogField';
import {Form ,Field} from 'react-final-form';
import {setBlogForReview} from '../../store/blog-slice'
import { useDispatch, useSelector } from 'react-redux';
const formFields = [
    { label: 'Blog Title', name: 'title' },
    { label: 'Content', name: 'content' }
  ];
  
const BlogForm = (props) => {

  const dispatch = useDispatch();
  const initialValues = useSelector(state => state.blog.blogUnderReview);
  const onSubmit = async values => {
   dispatch(setBlogForReview(values))
    props.reviewBlog();
  }
  const renderFields= () => {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={BlogField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  return (
    <div>
      <Form
      initialValues={initialValues}
       onSubmit={onSubmit}
       render={({handleSubmit, form, submitting, pristine, values})=>(
        <form onSubmit={handleSubmit}>
        {renderFields()}
        <Link to="/blogs" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
      )}>
      </Form>
  </div>
  )
}


export default BlogForm;