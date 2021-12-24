import React from 'react'
import ProfileCard from './Component/profilecard/ProfileCard'
import "./App.css"
import Header from './Component/Header/Header'
import Share from './Component/Share/Share'



function App() {

  return (
    <>
    <Header/>
    <div className="profilecard">
    <ProfileCard/>
    </div>
    <div className="share"><Share/></div>
    
      
    </>
  )
}

export default App
