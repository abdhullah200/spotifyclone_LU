import React from 'react'
import './mainSection.css'
import Trending from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'

const MainSection = () => {
  return (
    <main className='mainSection'  >
      <Trending />
      <PopularArtists />
    </main>
  )
}

export default MainSection
