/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Statistics.css'; // Import the custom CSS

export default function Statistics() {
  const stats = [
    { number: "120", title: "Years With You", description: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero." },
    { number: "400", title: "Awards", description: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero." },
    { number: "250", title: "Doctors", description: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero." },
    { number: "800", title: "Satisfied Client", description: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero." },
  ];

  return (
    <div className="statistics-container ">
      {stats.map((stat, index) => (
        <Card key={index} className="statistics-card">
          <Card.Body>
            <h2 className="statistics-number">{stat.number}</h2>
            <h5 className="statistics-title">{stat.title}</h5>
            <p className="statistics-description">{stat.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

