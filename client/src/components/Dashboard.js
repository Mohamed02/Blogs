import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import BlogsList from './blogs/BlogsList';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <BlogsList/>
      <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
    
  )
}
