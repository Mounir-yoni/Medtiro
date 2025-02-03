import image from '../../../image/doctor1.png';
import './Home.css';
import lineimage from '../../../image/line.png';
import boximage from '../../../image/box.png';
import circleimage from '../../../image/circle.png';
import tranimage from '../../../image/tran.png';
import plusimage from '../../../image/pluse.png';
import zigzagimage from '../../../image/zigzag.png';
import Button from 'react-bootstrap/Button';

export default function HomeCommp() {
  return (
    <div
      className="container mt-5"
      style={{ maxWidth: '90%', overflow: 'hidden', position: 'relative' }}
    >
      <div className="lineimage-container">
        <img src={lineimage} className="lineimage" alt="" />
        <img src={boximage} className="boximage" alt="" />
        <img src={circleimage} className="circleimage" alt="" />
        <img src={tranimage} className="tranimage" alt="" />
        <img src={plusimage} className="pluseimage" alt="" />
        <img src={zigzagimage} className="zigzagimage" alt="" />
      </div>
      <div className="row home-div">
        <div className="col-12 col-lg-7 div-text-home">
          <h6 className="text-home-h6">We Provide All Health Care Solution</h6>
          <h2 className="text-home-h2">
            Protect Your Health And Take Care To Of Your Health
          </h2>
          <Button
            
            variant="success"
            className='btn-readmore'
          >
            Read More
          </Button>
        </div>
        <div className="col-12 col-lg-5">
          <img className="img-doctor1 " src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
