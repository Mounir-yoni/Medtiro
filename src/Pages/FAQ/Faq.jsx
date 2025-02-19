/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import FAQAccordion from '../../Commponet/FAQ-Commonent/Faqcommponent'
import Lastnews from '../../Commponet/Home-Commponet/lastnews/Lastnews'
import Footer from '../../Commponet/utility/footer/Footer'

export default function Faq() {
  return (
    <div style={{backgroundColor:'#ffff',overflow:'hidden',width:'100%'}}>
      <NavbarComponent/>
      <Pagehome pagedata={'FAQ'}/>
      <FAQAccordion/>
      <Lastnews/>
      <Footer/>
    </div>
  )
}
