/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import imageright from '../../../image/doctor3.jpg'
const table = [1, 2, 3, 4];
export default function Comments() {
    const dataflow = table.map((item, index) => (
        <div key={index} className="comment-box">
          <img src={imageright} alt="Commenter" className="commenter-image" />
          <div className="comment-details">
            <h4>George</h4>
            <p className="comment-time">MAY 09, 2021 AT 10:45 AM</p>
            <p className="comment-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley.
            </p>
            <button className="reply-btn">REPLY</button>
          </div>
        </div>
      ));
  
    return <div>{dataflow}</div>;

    
}
