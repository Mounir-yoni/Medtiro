/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Blogdet from '../../Commponet/Blog-Details-Commponet/Blogdet'

export default function Blogedetpage() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%',position:"relative"}}>
        <NavbarComponent/>
        <Pagehome pagedata={'Blog Details'}/>
        <Blogdet/>
    </div>
  )
}
