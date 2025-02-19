/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar } from 'react-bootstrap'
import './home.css'
import NavbarCommponet from '../Commponet/utility/navbar/NavbarCommponet'
import HomeCommp from '../Commponet/Home-Commponet/home/Home-Commp'
import Aboutus from '../Commponet/Home-Commponet/aboutus/Aboutus'
import WorkingProcec from '../Commponet/Home-Commponet/workingprocec/WorkingProcec'
import ContactUs from '../Commponet/Home-Commponet/contactus/ContactUs'
import Service from '../Commponet/Home-Commponet/service/Service'
import Testimonial from '../Commponet/Home-Commponet/Testimonial/Testimonial'
import Lastnews from '../Commponet/Home-Commponet/lastnews/Lastnews'
import Footer from '../Commponet/utility/footer/Footer'
export default function HomePage() {
  
  return (
    <div style={{width:'100%',overflow:'hidden'}}>
      
      <NavbarCommponet/>
      <HomeCommp/>
      <Aboutus/>
      <WorkingProcec/>
      <ContactUs/>
      <Service/>
      <Testimonial/>
      <Lastnews/>
      <Footer/>*/
    </div>
  )
  
}
