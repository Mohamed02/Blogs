import axios from 'axios';
import {blogAction } from '.';

export const fetchBlogs = () => async dispatch => {

       try {
       
       const res = await axios.get('/api/blogs');
       console.log('fetch user data ***8',res);
       dispatch(blogAction.setBlogsList(res.data));
       } catch (error) {
              console.log('error occurred',error);
       }
}
export const updateBlogForm = (values) => async dispatch => {
       dispatch(blogAction.updateForm(values))
       // try{
       //        const res = await axios.post('/api/blogs',values);
       //        console.log('New blog added ',res);
       //        dispatch(blogAction.fetchBlogs())
       // }
       // catch(err){
       //        console.log('error');
       // }

}
export const addBlog = (values)=> async dispatch => {
       
       try{
              await axios.post('/api/blogs',values);
              dispatch(fetchBlogs());
       }
       catch(err){
              console.log('error',err);
       }

}