import { useState } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import JobCard from './JobCard'
import HomePage from './HomePage'
import AddJob from './AddJob'
import JobPage from './JobPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobCard />} />
        <Route path="/addjobs" element={<AddJob />} />
        <Route path="/jobs/job/:id" element={<JobPage />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
