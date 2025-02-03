/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import imagenews from '../../../image/news1.jpg'
import FeatureList from './Pers'
import FAQAccordion from './Dropdown'
export default function Rightside() {
  return (
    <div className='div-rightside'>
        
        <img src={imagenews} className="img-news-right" alt="" />
        <h6 className="title-news-right">Why Medical Had Been So Popular Till</h6>
        <p className='text-news-right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <FeatureList/>
        <h6 className="title-news-right" style={{marginTop:'20px'}}>Popular Questions</h6>
        <p className='text-news-right'>
        Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <FAQAccordion/>
    </div>
  )
}
