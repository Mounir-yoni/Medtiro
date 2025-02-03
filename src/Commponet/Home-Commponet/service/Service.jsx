/* eslint-disable no-unused-vars */
import React from "react";
import "./Service.css";
import SliderComponent from "../../utility/swiper";
import Swiper from "swiper";
import imageboxblue from '../../../image/boxbluedach.png'
import imageboxorange from '../../../image/orangbox.png'
import imagezigzag from '../../../image/zigzagblue.png'
import imagecircledach from '../../../image/circledach.png'
export default function Service() {
  
  return (
    <div className="" style={{position:'relative'}}>

    <div className="div-back " ></div>
    <div className=" mt-5 d-flex justify-content-between oll-div-service" style={{backgroundColor:"white",paddingTop:'200px',marginBottom:'80px'}}>
      <div className="div-text-service " style={{backgroundColor:"white",borderRadius:"25px",padding:"20px" }} >
        <div className="heading-bx">
          <h6 className="title-ext">Services</h6>
          <h2 className="title">
            We Cover A Big Variety Of Medical Services
          </h2>
          <p>
            We provide the special tips and advice of health care treatment and
            a high level of expertise.
          </p>
        </div>
        <a className="btn btn-secondary btn-lg shadow" href="/react/services">
          All Services
        </a>
      </div>

        <SliderComponent/>

    </div>
    <div className="background-img-service">
      <img src={imageboxblue} className="img-boxblue displayback" alt="" />
      <img src={imageboxorange} className="img-boxorange displayback" alt="" />
      <img src={imagezigzag} className="img-zigzag displayback" alt="" />
      <img src={imagecircledach} className="img-circledach displayback" alt="" />
    </div>
    </div>
  );
}
