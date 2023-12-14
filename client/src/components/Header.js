import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const auth= useSelector((state)=>state.auth);
    console.log('auth: ',auth);
    const renderContent=()=>{

        if(auth.user){
            return [
                <li key="3" style={{ margin: '0 10px' }}>
                  <Link to="/blogs">My Blogs</Link>
                </li>,
                <li key="2">
                  <a href={'/auth/logout'}>Logout</a>
                </li>
              ];
        }else {
            return (
                <li>
                  <a href={'/auth/google'}>Login With Google</a>
                </li>
              );
        }
      }

    return (
        <nav className="indigo">
          <div className="nav-wrapper">
            <Link
              to="/blogs"
              className="left brand-logo"
              style={{ marginLeft: '10px' }}
            >
              Blogster
            </Link>
            <ul className="right">
                {renderContent()}
            </ul>
           
          </div>
        </nav>
      );
}

export default Header
