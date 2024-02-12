// import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProjectDetails from './Pages/ProjectDetails';
import Brand from './Pages/Brand';
import Plans from './Pages/Plans';
import Firms from './Pages/Firms';


function App() {
 


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/project' element={<ProjectDetails />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/plan' element={<Plans />} />
        <Route path='/firms' element={<Firms />} />
      </Routes>


     
    </>
  )

}

export default App
