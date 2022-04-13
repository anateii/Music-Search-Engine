import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DetailsPage from './components/DetailsPage';
import 'bootstrap-icons/font/bootstrap-icons'


function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element ={<MainPage />}/>
     <Route path='/details/:id' element={<DetailsPage />} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
