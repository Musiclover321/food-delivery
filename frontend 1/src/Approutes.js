
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage'

export default function Approutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
    </Routes>
  );
}
 