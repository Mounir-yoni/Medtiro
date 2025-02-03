/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Servicecommponet from '../../Commponet/service-Commponet/Servicecommponet'
import Statistics from '../../Commponet/about-Commponet/Statistics'
import Doctor from '../../Commponet/utility/doctors/Doctors'
import Lastnews from '../../Commponet/Home-Commponet/lastnews/Lastnews'
import Footer from '../../Commponet/utility/footer/Footer'

export default function ServicePage() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
        <NavbarComponent/>
        <Pagehome pagedata={'Services'}/>
        <Servicecommponet/>
        <Statistics/>
        <Doctor modeofdoctors={'bestdoctors'} />
        <Lastnews/>
        <Footer/>
    </div>
  )
}
