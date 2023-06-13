import React, {useEffect} from 'react';
import './App.css';
import Homescreen from './HomeScreen';
import Login from './Login';
import Profilescreen from './Profilescreen';
import {auth} from './firebase'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    
   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //logged in
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }else{
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
    
  }, [dispatch]);
  return (
    <div className="app">
     
     <Router>
        {!user ? (<Login />) : (
          <Routes>
          <Route exact path="/" element={<Homescreen/>} />
          <Route exact path="/profile" element={<Profilescreen/>} />
      </Routes>

        )}  
       

      
    </Router>
    </div>
  );
}

export default App;
