import './Testimonial.css'
import Clidertescircile from './Clidertescircile'
import CircleDesign from './Tescircile'
import imagepluseorang from '../../../image/pluse.png'
import imagecircleblue from '../../../image/circleblue.png'
import imagebox from '../../../image/box.png'
export default function Testimonial() {
  return (
    <div className="testimonial-container" style={{backgroundColor:'#f9f9f9',position: 'relative'}}>
      <div className="testimonial-header">
        <h6 className="title-Testimonial">Testimonial</h6>
        <h2 className="second-title-Testimonial">
          See What Are The Patients Saying About Us
        </h2>
      </div>
      <div className="testimonial-content ">
        <div className="circle-design-container">
          <CircleDesign />
        </div>
        <Clidertescircile />
      </div>
      <div className='background-img-testimonial'>
        <img src={imagebox} className="img-box" alt="" />
        <img src={imagepluseorang} className="img-pluse displayback" alt="" />
        <img src={imagecircleblue} className="img-circleblue displayback" alt="" />
      </div>
    </div>
  );
}
