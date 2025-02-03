/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Doctor from '../../Commponet/utility/doctors/Doctors'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Team() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
        <NavbarComponent/>
        <Pagehome pagedata={'Our Team'}/>
        <Doctor modeofdoctors={'alldoctors'} />
        <Footer/>
    </div>
  )
}
