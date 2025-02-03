/* eslint-disable no-unused-vars */
import React from 'react'
import './comm.css'
import imagedoc from '../../../image/doc.png'
import imagepdf from '../../../image/pdf.png'
export default function Leftside() {
    const dataflowleftside = [
        {
            id: 1,
            title: "Engine Diagnostics",
         },
        {
            id: 2,
            title: "Lube Oil and Filters",
         },
        {
            id: 3,
            title: "Belts and Hoses",
         },
        {
            id: 4,
            title: "Air Conditioning",
         },
        {
            id: 5,
            title: "Brake Repair",
         },
        {
            id: 6,
            title: "Tire and Wheel Services",
         },

]
  return (
    <div style={{width:'100%'}}>
        <div className="leftside-div-det" >
            {
                dataflowleftside.map((item) => (
                    <button className="leftside-button-det" key={item.id} >{item.title} 
                        <span className="arrow-icon"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                        </span>
                    </button>
                ))
            }
           
        </div>
        <div className="leftside-div-det" >
                    <h6 className="leftside-h6-det">Download</h6>
                    <hr className="leftside-hr-det" />

                    <button className="leftside-button-det-2"  > download our brochure 
                                <img src={imagedoc} className='docimage' alt="" />
                    </button>

                    <button className="leftside-button-det-2"  >  our company details
                                <img src={imagepdf} style={{marginLeft:'19%'}} className='docimage' alt="" />
                    </button>
            
           
        </div>

    </div>
  )
}
