/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swipernews.css';
import { useState } from 'react';
import image1 from '../../../image/news1.jpg'
import image2 from '../../../image/news2.jpg'
import image3 from '../../../image/news3.jpg'
import image4 from '../../../image/news4.jpg'
import image5 from '../../../image/news5.jpg'


const blogs = [
  {
    id: 1,
    image: image1, // Replace with actual image URL
    author: 'Peter Packer',
    date: '20 July 2021',
    title: 'Can you get a diflucan prescription online?',
  },
  {
    id: 2,
    image: image2,
    author: 'Sonar Moyna',
    date: '19 July 2021',
    title: 'Why Is Skin Surgeon Considered Underrated',
  },
  {
    id: 3,
    image: image3,
    author: 'Kalina Mollika',
    date: '18 July 2021',
    title: 'Dental Care for Women is very important',
  },
  {
    id: 4,
    image: image4,
    author: 'Sonar Moyna',
    date: '12 July 2024',
    title: 'why is skin surgeon considered underrated',
  },
  {
    id: 5,
    image: image5,
    author: 'peter paker',
    date: '18 July 2024',
    title: 'can you get a diflucan prescription online?',
  },
];

export default function BlogCarousel() {


    let numberofcards = 3
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })
  if (width>1350) {
    numberofcards=3
}else{
    if(width<1350 && width>1200){

        numberofcards = 2;
    }else{
        
        
        if (width<1200 && width>991) {
            numberofcards = 4;
        }else{
        if(width<991 && width>768){
            numberofcards = 3;
        }else{
            if(width<768 && width>575){
                numberofcards = 2;
            }else{
                numberofcards = 1;
            }
        }
    }
}
}


  return (
    <div className="blog-carousel-news" style={{backgroundColor:'#f9f9f9'}}>
    <Swiper
      slidesPerView={numberofcards}
      loop={true}
      spaceBetween={10}

      className="swiper-container-news"
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog.id} className="blog-card-news">
          <div className="card-news">
            <img src={blog.image} alt={blog.title} className="card-image-news" />
            <div className="card-content-news">
              <div className="card-meta-news">
                <span className="author">{blog.author}</span>
                <span className="date">{blog.date}</span>
              </div>
              <h3 className="card-title-news">{blog.title}</h3>
              <button className="read-more-news">
                Read More <span >&rarr;</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
