import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import "./commponetblog.css"; // Custom styles
import image1 from "../../../image/news1.jpg";
import image2 from "../../../image/news2.jpg";
import image3 from "../../../image/news3.jpg";
import image4 from "../../../image/news4.jpg";
import image5 from "../../../image/doctor5.jpeg";
import image6 from "../../../image/doctor6.jpeg";

const posts = [
  {
    title: "Precious Tips To Help You Get Better.",
    date: "21 July 2021",
    image: image1,
  },
  {
    title: "Ten Doubts You Should Clarify About.",
    date: "20 July 2021",
    image: image2,
  },
  {
    title: "The 10 Steps Needed For Putting.",
    date: "19 July 2021",
    image: image3,
  },
];


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  const tags = [
    "Improvement",
    "Health",
    "Life",
    "Covid",
    "Healthy",
    "Growth",
    "Education",
    "Manage",
    "General",
  ];
  

export default function RecentPosts() {
  return (
    <div className="" style={{width:'80%'}}>
      {/* Search Bar */}
      <div className="search-box">
        <input type="text" placeholder="Enter your keywords..." />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Recent Posts Section */}
      <div className="recent-posts">
        <h4>Recent Posts</h4>
        <div className="underline"></div>

        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.image} alt="Post" className="post-image" />
            <div>
              <p className="post-title">{post.title}</p>
              <p className="post-date">
                <FaCalendarAlt className="calendar-icon" /> {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" gallery-container">
      {/* Title Section */}
      <h4>Our Gallery</h4>
      <div className="underline"></div>

      {/* Image Grid */}
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-4">
            <img src={img} alt={`Gallery ${index}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>


    <div className=" tags-container">
      {/* Title Section */}
      <h4>Tags</h4>
      <div className="underline"></div>

      {/* Tag Buttons */}
      <div className="tags">
        {tags.map((tag, index) => (
          <button key={index} className="tag">
            {tag}
          </button>
        ))}
      </div>
    </div>


    </div>
  );
}
