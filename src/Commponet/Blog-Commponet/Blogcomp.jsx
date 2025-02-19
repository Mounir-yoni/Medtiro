/* eslint-disable no-unused-vars */
import React from 'react'
import './blog.css'
import image1 from '../../image/news1.jpg'
import image2 from '../../image/news2.jpg'
import image3 from '../../image/news3.jpg'
import image4 from '../../image/news4.jpg'
import image5 from '../../image/news5.jpg'
export default function Blogcomp() {

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
        {
          id: 6,
          image: image4,
          author: 'peter paker',
          date: '18 July 2024',
          title: 'can you get a diflucan prescription online?',
        },
      ];




  return (
    <div className="blog-carousel-news" style={{backgroundColor:'#f9f9f9'}}>

      {blogs.map((blog) => (
          <div className="news-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="news-card-image" />
            <div className="news-card-content">
              <div className="news-card-meta">
                <span className="news-author">{blog.author}</span>
                <span className="news-date">{blog.date}</span>
              </div>
              <h3 className="news-card-title">{blog.title}</h3>
              <button className="news-read-more">
                Read More <span >&rarr;</span>
              </button>
            </div>
          </div>
      ))}
  </div>
  )
}










   
