import React from 'react'
import './sidebar.css'
import Cards from './Cards'

const Sidebar = () => {
  const Text = ["Legal", "Security and Privacy center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"]
  return (
    <div className='sidebarMainContainer' >
      <div className="sidebarTopSection">
        <h1>Your Libray</h1>
        <p>+</p>
      </div>
      <div className="sidebarMiddleSection">
        <Cards heading="Create Your First Playlist" subheading="It's easy, we'll help you" buttontext="Create playlist" />
        <Cards heading="Let's find some podcast to follow" subheading="we'll keep you updated on new episodes" buttontext="Browse podcasts" />
      </div>
      <div className="sidebarBottomSection">
        <div className="sidebarBottomSectionTopContainer">
          {
            Text.map((ele) => {
              return (
                <p>{ele}</p>
              )
            })
          }
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <p>Cookies</p>
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <button>English</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
