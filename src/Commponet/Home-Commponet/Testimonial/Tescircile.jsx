/* eslint-disable no-unused-vars */
import React from 'react';
import './CircleDesign.css';
import imagedoctor1 from '../../../image/doctor10.jpeg';
import imagedoctor2 from '../../../image/doctor3.jpg';
import imagedoctor3 from '../../../image/doctor4.jpg';
import imagedoctor4 from '../../../image/doctor5.jpeg';
import imagedoctor5 from '../../../image/doctor6.jpeg';
import imagedoctor6 from '../../../image/doctor7.jpeg';


import imagecircldoctor from '../../../image/circledoctor.png'

const CircleDesign = () => {
  return (
    <div className='bg-' style={{ position: 'relative', width: '100%', height: '430px', margin: 'auto',zIndex:'99' }}>
      {/* Central Circular Image */}
      <img
        src={imagecircldoctor}
        alt="Central Circle"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      />
      {/* Outer Images */}
      <img
        src={imagedoctor1}
        alt="Doctor 1"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translate(-50%, -10%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
      <img
        src={imagedoctor2}
        alt="Doctor 2"
        style={{
          position: 'absolute',
          top: '25%',
          left: '85%',
          transform: 'translate(-50%, -50%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
      <img
        src={imagedoctor3}
        alt="Doctor 3"
        style={{
          position: 'absolute',
          top: '75%',
          left: '85%',
          transform: 'translate(-50%, -50%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
      <img
        src={imagedoctor4}
        alt="Doctor 4"
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -95%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
      <img
        src={imagedoctor5}
        alt="Doctor 5"
        style={{
          position: 'absolute',
          top: '75%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
      <img
        src={imagedoctor6}
        alt="Doctor 6"
        style={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default CircleDesign;
