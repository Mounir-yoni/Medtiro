/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import HomePage from '../HomePage'
import { PageItem } from 'react-bootstrap'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Bookapp from '../../Commponet/utility/BookApp/Bookapp'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Booking() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
      <NavbarComponent/>
      <Pagehome pagedata={'Booking'}/>
      <Bookapp/>
      <Footer/>
    </div>
  )
}
