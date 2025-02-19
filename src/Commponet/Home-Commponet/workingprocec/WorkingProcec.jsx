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
    <div className='working-section d-flex align-items-center flex-column w-100 ' style={{overflow:'hidden',position:'relative'}}  >
  <h6 className='working-section-title-h6'>Working Process</h6>
  <h5 className='working-section-title-h5 mt-3'>How we works?</h5>

  <div className="working-section-card-container-wrapper bg-white">
    <Card className="working-section-custom-card working-section-first-card">
      <Card.Body>
        <h2 className="working-section-card-number">01</h2>
        <Card.Title className="working-section-card-title">Make Appointment</Card.Title>
        <Card.Text className="working-section-card-text">
          It is a long established fact that a reader will be distracted by the readable content of.
        </Card.Text>
        <Button variant="light" className="working-section-view-more-button">
          View More
          <span className="working-section-arrow-icon">&#x27A4;</span>
        </Button>
      </Card.Body>
    </Card>

    <Card className="working-section-custom-card" style={{backgroundColor: '#f38f5e'}}>
      <Card.Body>
        <h2 className="working-section-card-number">02</h2>
        <Card.Title className="working-section-card-title" style={{color: '#ffffff'}}>Take Treatment</Card.Title>
        <Card.Text className="working-section-card-text">
          It is a long established fact that a reader will be distracted by the readable content of.
        </Card.Text>
        <Button variant="light" className="working-section-view-more-button">
          View More
          <span className="working-section-arrow-icon">&#x27A4;</span>
        </Button>
      </Card.Body>
    </Card>

    <Card className="working-section-custom-card working-section-third-card">
      <Card.Body>
        <h2 className="working-section-card-number">03</h2>
        <Card.Title className="working-section-card-title">Registration</Card.Title>
        <Card.Text className="working-section-card-text">
          It is a long established fact that a reader will be distracted by the readable content of.
        </Card.Text>
        <Button variant="light" className="working-section-view-more-button">
          View More
          <span className="working-section-arrow-icon" style={{backgroundColor: '#fffff !important'}}>&#x27A4;</span>
        </Button>
      </Card.Body>
    </Card>
  </div>

  <div className='working-section-background-image-div' style={{overflow: 'hidden', width: '100%'}}>
    <img src={imageplus} className="working-section-pluse-image displayback" alt="" />
    <img src={imagecircleorang} className="working-section-circle-image displayback" alt="" />
    <img src={imagecircleblue} className="working-section-circle-image2 displayback" alt="" />
    <img src={imagezigzag} className="working-section-circle-image4 displayback" alt="" />
    <img src={imageback} className="working-section-circle-image3 displayback" alt="" />
  </div>
</div>

  )
}
