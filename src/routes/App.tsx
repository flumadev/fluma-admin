import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Login } from '../view/index'


export default function App() {

  const isLogged = true
  console.log(isLogged);


  return (
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}
