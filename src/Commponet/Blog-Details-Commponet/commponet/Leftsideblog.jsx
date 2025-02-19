/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import imagenews from '../../../image/news1.jpg'
import imagedoctor from '../../../image/doctor5.jpeg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import imageleft from '../../../image/doctor11.jpg'
import imageright from '../../../image/doctor3.jpg'
import imageahtur from '../../../image/doctor9.jpeg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Comments from './Comments';
export default function Leftsideblog() {
  return (
    <div className='div-leftside-blog-det'>
      <img src={imagenews} className="img-news-left" alt="" />
      <div className="author-container">
      {/* Profile Image */}
      <img
        src={imagedoctor}
        alt="Author"
        className="author-img"
      />
      
      {/* Author Name & Date */}
      <span className="author-name">Sonar Moyna</span>

      {/* Date with Calendar Icon */}
      <FaCalendarAlt className="calendar-icon" />
      <span className="author-date">19 July 2021</span>
    </div>
    <h6 className="title-news-right">Precious Tips To Help You Get Better.</h6>
    <p className='text-blog-right'>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
    <div className="quote-container">
      <FaQuoteLeft className="quote-icon-left" />
      <p className="quote-text">
        <em>
          Once you’ve gotten all the titles and have chosen the best one, the
          next thing you need to do is to craft a magnetic content. Great
          content marketers excel at creating content.
        </em>
      </p>
    </div>
    <p className='text-blog-right' style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div className="gallery-container-div">
      <img src={imageleft} className="img-blogdet-left" alt="" />
      <img src={imageright} className="img-blogdet-left" alt="" />
    </div>
    <p className='text-blog-right' style={{marginTop:'20px'}}>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
    <p className='text-blog-right' style={{marginTop:'20px'}}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
    <div className="tags-share-container">
      <div className="tags-section">
        <strong>Tags:</strong>
        <a href="#">Health</a>
        <a href="#">Growth</a>
        <a href="#">Life</a>
      </div>

      <div className="share-section">
        <strong>Share:</strong>
        <a href="#" className="social-icon-blogdet facebook"><FaFacebookF /></a>
        <a href="#" className="social-icon-blogdet instagram"><FaInstagram /></a>
        <a href="#" className="social-icon-blogdet linkedin"><FaLinkedinIn /></a>
        <a href="#" className="social-icon-blogdet twitter"><FaTwitter /></a>
      </div>

    </div>


    <div className="author-comments-container">
      
      {/* Author Box */}
      <div className="author-box">
        <img src={imageahtur} alt="Author" className="author-image" />
        <div className="author-details">
          <h3>Sonar Z. Moyna</h3>
          <p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
          <div className="social-icons">
            <a href="#" className="social-icon-blogdet"><FaFacebookF /></a>
            <a href="#" className="social-icon-blogdet"><FaInstagram /></a>
            <a href="#" className="social-icon-blogdet"><FaLinkedinIn /></a>
            <a href="#" className="social-icon-blogdet"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <h3 className="comments-title">8 Comments</h3>
      <Comments/>
    </div>
    
    </div>
  )
}
