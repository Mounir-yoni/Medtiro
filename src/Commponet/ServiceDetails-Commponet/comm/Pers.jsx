/* eslint-disable no-unused-vars */
import React from "react";
import './comm.css'
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  "Then along come two they",
  "That’s just a little bit more than",
  "Standard dummy text ever since",
  "Simply dummy text of the printing",
  "Make a type specimen book"
];

const progressData = [
  { label: "Advanced Technology", value: 96 },
  { label: "Certified Engineers", value: 79 },
  { label: "6 years Experience", value: 75 }
];

const FeatureList = () => {
  return (
    <div className=" mt-4">
      <div className="row">
        {/* Left Side - Checkmark List */}
        <div className="col-md-6">
          {features.map((feature, index) => (
            <div key={index} className="d-flex align-items-center mb-3">
              <div className="check-icon d-flex align-items-center justify-content-center">
                ✓
              </div>
              <span className="ms-3" style={{ fontSize: "18px",width:'100% !important',color: "#565ACF",fontWeight: "bold" }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* Right Side - Progress Bars */}
        <div className="col-md-6">
          {progressData.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong style={{marginTop:'11px',marginBottom:'10px',color:'#565ACF',fontWeight:'bold'}}>{item.label}</strong>
                <span style={{fontWeight:'bold',color:"#565ACF",margin:'0'}} >{item.value}%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar "
                  style={{ width: `${item.value}%`, backgroundColor: "#565ACF" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
