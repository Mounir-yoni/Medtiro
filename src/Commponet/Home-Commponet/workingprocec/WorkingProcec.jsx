/* eslint-disable no-unused-vars */
import React from 'react'
import './workingprocec.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import imageplus from '../../../image/pluse.png'
import imagecircleorang from '../../../image/circleorange.png'
import imagecircleblue from '../../../image/circleblue.png'
import imageback from '../../../image/backgounddached.png'
import imagezigzag from '../../../image/zigzagblue.png'
export default function WorkingProcec() {
  return (
    <div className='d-flex align-items-center flex-column w-100' style={{overflow:'hidden',position:'relative'}}  >
      <h6 className='working-title-h6 '>Working Process</h6>
      <h5 className='working-title-h5 mt-3'>How we works?</h5>


      <div className="card-container-wrapper">
  <Card className="custom-card first-card">
    <Card.Body>
      <h2 className="card-number">
        01
      </h2>
      <Card.Title className="card-title">Make Appointment</Card.Title>
      <Card.Text className="card-text">
        It is a long established fact that a reader will be distracted by the readable content of.
      </Card.Text>
      <Button variant="light" className="view-more-button">
        View More
        <span className="arrow-icon">&#x27A4;</span>
      </Button>
    </Card.Body>
  </Card>

  <Card className="custom-card" style={{backgroundColor: '#f38f5e'}}>
    <Card.Body>
      <h2 className="card-number">
        02
      </h2>
      <Card.Title className="card-title">Take Treatment</Card.Title>
      <Card.Text className="card-text">
        It is a long established fact that a reader will be distracted by the readable content of.
      </Card.Text>
      <Button variant="light" className="view-more-button">
        View More
        <span className="arrow-icon">&#x27A4;</span>
      </Button>
    </Card.Body>
  </Card>

  <Card className="custom-card third-card">
    <Card.Body>
      <h2 className="card-number">
        03
      </h2>
      <Card.Title className="card-title">Registration</Card.Title>
      <Card.Text className="card-text">
        It is a long established fact that a reader will be distracted by the readable content of.
      </Card.Text>
      <Button variant="light" className="view-more-button">
        View More
        <span className="arrow-icon">&#x27A4;</span>
      </Button>
    </Card.Body>
  </Card>
</div>

    <div className='background-image-div-working' style={{overflow: 'hidden' , width: '100%'}}>
      <img src={imageplus} className="pluse-image-working displayback" alt="" />
      <img src={imagecircleorang} className="circle-image-working displayback" alt="" />
      <img src={imagecircleblue} className="circle-image-working2 displayback" alt="" />
      <img src={imagezigzag} className="circle-image-working4 displayback" alt="" />
      <img src={imageback} className="circle-image-working3 displayback" alt="" />
    </div>


    </div>
  )
}
