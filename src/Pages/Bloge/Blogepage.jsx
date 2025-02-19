/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComponent from '../../Commponet/utility/navbar/NavbarCommponet'
import Pagehome from '../../Commponet/utility/componet-scr-page/startofpage/Pagehome'
import Blogcomp from '../../Commponet/Blog-Commponet/Blogcomp'
import Pagination from '../../Commponet/Blog-Commponet/pagination/Paginationblog'
import Footer from '../../Commponet/utility/footer/Footer'
export default function Blogepage() {
  return (
    <div style={{backgroundColor:'#fff',overflow:'hidden',width:'100%'}}>
      <NavbarComponent/>
      <Pagehome pagedata={'Blog Grid 3'}/>
      <Blogcomp/>
      <Pagination totalPages={3} />
      <Footer/>
    </div>
  )
}
