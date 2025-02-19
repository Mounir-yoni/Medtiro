/* eslint-disable no-unused-vars */
import React from 'react'
import './contactus.css'
import mobileimage from '../../../image/mobile.png'
import womanimage from '../../../image/woman.png'

import imagephone1 from '../../../image/phone1.png'
import imagephone2 from '../../../image/phone2.png'
import imagephone3 from '../../../image/phone3.png'
import imagephone4 from '../../../image/phone4.png'
import imagetran from '../../../image/tran.png'
import imageback from '../../../image/back2.png'
import imagezigzag from '../../../image/zigzag.png'
import Bookapp from '../../utility/BookApp/Bookapp'
export default function ContactUs() {
  return (
    <div className="mt-5 container d-flex mb-5  div-contact " style={{position: 'relative'}}>
    <div className="div-contact-image">
      <img src={mobileimage} className="img-mobile" alt="Mobile Illustration" />
      <img src={womanimage} className="img-woman" alt="Woman Illustration" />
    </div>

    <div className="div-contact-text  " >


        <Bookapp></Bookapp>

        </div>

        <div className="div-contact-background-image">
            <img src={imagephone1} className="img-phone1 displayback" alt="" />
            <img src={imagephone2} className="img-phone2 displayback" alt="" />
            <img src={imagephone3} className="img-phone3 displayback"  alt="" />
            <img src={imagephone4} className="img-phone4 displayback" alt="" />
            <img src={imagetran} className="img-tran displayback" alt="" />
            <img src={imagezigzag} className="img-zigzag-contact displayback" alt="" />
            <img src={imageback} className="img-back displayback" alt="" />
        </div>
  </div>
  )
}
