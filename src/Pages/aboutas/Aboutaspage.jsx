/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Aboutus from '../../Commponet/Home-Commponet/aboutus/Aboutus'
import Statistics from '../../Commponet/about-Commponet/Statistics'
import Doctor from '../../Commponet/utility/doctors/Doctors'
import Testimonial from '../../Commponet/Home-Commponet/Testimonial/Testimonial'
import Lastnews from '../../Commponet/Home-Commponet/lastnews/Lastnews'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Aboutaspage() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
      <NavbarComponent/>
      <Pagehome pagedata={'About Us'}/>
      <Aboutus/>
      <Statistics/>
      <Doctor/>
      <Testimonial/>
      <Lastnews/>
      <Footer/>
    </div>
  )
}
