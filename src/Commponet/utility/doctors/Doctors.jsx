/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './doctor.css'
import BlogCarousel from './Swiprenewes'

import imagetran from '../../../image/tran.png'
import imagecircledach from '../../../image/circledach.png'
import imagezigzag from '../../../image/zigzag.png'
import imageboxorang from '../../../image/orangbox.png'
export default function Doctor({modeofdoctors}) {
  return (
    <div className="lastnews-container d-flex flex-column align-items-center" style={{backgroundColor:'#fff',marginTop:'50px',position:'relative'}}>
      <h6 className="title-lastnews">Our Doctor</h6>
      <h3 className="title-lastnews-2">Meet Best Doctors</h3>
      <div>
        <BlogCarousel modeofdoctors={modeofdoctors} />
      </div>
      <div className='background-img-lastnews'>
        <img src={imagetran} className="img-tran-lastnews displayback" alt="" />
        <img src={imagecircledach} className="img-circledach-lastnews displayback" alt="" />
        <img src={imagezigzag} className="img-zigzag-lastnews displayback" alt="" />
        <img src={imageboxorang} className="img-boxorang-lastnews displayback" alt="" />
      </div>
    </div>
  )
}
