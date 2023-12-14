import {RouterProvider} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import router from './routeProvider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './store/auth-actions';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('APP Loaded');
    dispatch(fetchUser());
  },[])
  return (
    <div className="App">
     
      <RouterProvider router={router} >
      <Header></Header>
      </RouterProvider>

    </div>
  );
}

export default App;
