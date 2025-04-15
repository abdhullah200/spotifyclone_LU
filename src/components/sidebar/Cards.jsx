import React from 'react'
import './sidebar.css'
const Cards = ({ heading,
    subheading,
    buttontext }) => {
    return (
        <div className='sidebarMiddleCards' >
            <h1>{heading}</h1>
            <p>{subheading}</p>
            <button>{buttontext}</button>
        </div>
    )
}

export default Cards
