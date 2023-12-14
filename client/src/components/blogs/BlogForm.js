import 'materialize-css/dist/css/materialize.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import BlogField from './BlogField';
import {Form ,Field} from 'react-final-form';
import { addBlog } from '../../store/blog-actions';
import { useDispatch } from 'react-redux';
const formFields = [
    { label: 'Blog Title', name: 'title' },
    { label: 'Content', name: 'content' }
  ];
  
const BlogForm = () => {

  const dispatch = useDispatch();
  const onSubmit = async values => {
   dispatch(addBlog(values))
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

function validate(values) {
    const errors = {};
  
    formFields.forEach(({ name }) => {
      if (!values[name]) {
        errors[name] = 'You must provide a value';
      }
    });
  
    return errors;
  }

export default BlogForm;