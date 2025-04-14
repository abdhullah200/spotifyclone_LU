import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import MainSection from './components/mainSection/MainSection'


function App() {

  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </>
  )
}

export default App
