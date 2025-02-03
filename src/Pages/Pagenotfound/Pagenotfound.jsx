/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import NotFoundPage from '../../Commponet/Pagenotfoundcomponet/Notfound'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Pagenotfound() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
        <NavbarComponent/>
        <Pagehome pagedata={'Page Not Found'}/>
        <NotFoundPage/>
        <Footer/>
    </div>
  )
}
