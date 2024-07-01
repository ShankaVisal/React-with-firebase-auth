import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Private from './Pages/Private';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { ProtectedRoutes } from './Components/ProtectedRoutes';

function App() {

  const [user,setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);

    });
    return ()=> unsubcribe();
  },[]);

  if(isFetching){
    return <h2>Loading.....</h2>
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home user={user}></Home>}></Route>
        <Route index path='/private' element={<ProtectedRoutes user={user}><Private></Private></ProtectedRoutes>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
