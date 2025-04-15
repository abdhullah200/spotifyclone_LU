import React from 'react'
import './popularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = ({setCurrentPage}) => {
  return (
    <div className='popularArtistsMainContainer trendingSectionMainContainer' >
      <span>
        Popular artists
      </span>
      <ArtistCard setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default PopularArtists
