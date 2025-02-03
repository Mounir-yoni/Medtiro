/* eslint-disable no-unused-vars */
import React from 'react';
import Leftside from './comm/Leftside';
import Rightside from './comm/Rightside';

export default function Serdetails() {
  return (
    <div className='container' style={{ position: 'relative', display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div className='col-12 col-lg-8'>
        <Rightside />
      </div>

      <div className='col-12 col-lg-4' style={{ position: 'sticky', top: '0', alignSelf: 'flex-start' }}>
        <Leftside />
      </div>
    </div>
  );
}