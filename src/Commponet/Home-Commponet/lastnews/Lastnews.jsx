/* eslint-disable no-unused-vars */
import React from 'react'
import './lastnews.css'
import BlogCarousel from './Swiprenewes'

import imagetran from '../../../image/tran.png'
import imagecircledach from '../../../image/circledach.png'
import imagezigzag from '../../../image/zigzag.png'
import imageboxorang from '../../../image/orangbox.png'
export default function Lastnews() {
  return (
    <div className="lastnews-container d-flex flex-column align-items-center" style={{backgroundColor:'#fff',position:'relative'}}>
      <h6 className="title-lastnews">Last News</h6>
      <h3 className="title-lastnews-2">Our Latest News</h3>
      <div>
        <BlogCarousel/>
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
