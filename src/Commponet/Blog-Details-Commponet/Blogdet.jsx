/* eslint-disable no-unused-vars */
import React from 'react'
import Rightsideblogdet from './commponet/Rightsideblogdet'
import Leftsideblog from './commponet/Leftsideblog'

export default function Blogdet() {
  return (
<div className='container div-blog-det' >
    <div className='col-12 col-lg-8 col-md-12 col-sm-12'>
        <Leftsideblog />
    </div>
    <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
        <Rightsideblogdet />
    </div>
</div>

  )
}
