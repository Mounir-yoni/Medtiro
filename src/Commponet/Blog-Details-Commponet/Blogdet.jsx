/* eslint-disable no-unused-vars */
import React from 'react'
import Rightsideblogdet from './commponet/Rightsideblogdet'
import Leftsideblog from './commponet/Leftsideblog'

export default function Blogdet() {
  return (
    <div className='container' style={{ position: 'relative', display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div  className='col-12 col-lg-8'>

        <Leftsideblog/>
        </div>

        <div className='col-12 col-lg-4'>
        <Rightsideblogdet/>

        </div>
    </div>

  )
}
