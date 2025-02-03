/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Pageshome.css'
import imageback from '../../../../image/back3.png'
export default function Pagehome({pagedata}) {
  return (
    <div className='pages-home'>
        <h4 className='pages-home-h4'>{pagedata}</h4>
        <button className='pages-home-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" style={{marginRight:"5px",marginBottom:"5px"}} fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
    </svg>Home / {pagedata}</button>

    <div>
        <img src={imageback} className='image-back-pages'  alt="" />
    </div>
    </div>
  )
}
