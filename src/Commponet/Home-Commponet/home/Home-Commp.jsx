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
  className="homepage-container mt-5"
  style={{ maxWidth: "90%", overflow: "hidden", position: "relative" }}
>
  <div className="homepage-lineimage-container">
    <img src={lineimage} className="homepage-lineimage" alt="" />
    <img src={boximage} className="homepage-boximage" alt="" />
    <img src={circleimage} className="homepage-circleimage" alt="" />
    <img src={tranimage} className="homepage-tranimage" alt="" />
    <img src={plusimage} className="homepage-pluseimage" alt="" />
    <img src={zigzagimage} className="homepage-zigzagimage" alt="" />
  </div>
  <div className="row homepage-div-homepage" style={{marginTop:'50px'}}>
    <div className="col-6 col-lg-7 col-md-12 homepage-div-text-home">
      <h6 className="homepage-text-homepage-h6">
        We Provide All Health Care Solution
      </h6>
      <h2 className="homepage-text-homepage-h2">
        Protect Your Health And Take Care To Of Your Health
      </h2>
      <Button variant="success" className="homepage-btn-readmore-home">
        Read More
      </Button>
    </div>
    <div className="col-6 col-lg-5 col-md-12 ">
      <img className="homepage-img-doctor1-homepage" src={image} alt="" />
    </div>
  </div>
</div>
  );
}
