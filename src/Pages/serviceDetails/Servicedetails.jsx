/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Serdetails from '../../Commponet/ServiceDetails-Commponet/Serdetails'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Servicedetails() {
  return (
    <div style={{position:'relative',backgroundColor:'#fff'}}>
      <NavbarComponent/>
      <Pagehome pagedata={'Service Details'}/>
      <Serdetails/>
      <Footer/>
    </div>
  )
}
