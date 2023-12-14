import axios from 'axios';
import { authAction } from '.';

export const fetchUser = () => async dispatch => {

 try {
    
  const res = await axios.get('/api/current_user');
  console.log('fetch user data ***8',res);
  dispatch(authAction.setLoginData(res.data));
 } catch (error) {
        console.log('error occurred',error);
 }
}