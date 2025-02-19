/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./FAQ.css";
const faqs = [
  "How Doctor Can Ease Your Pain?",
  "How do I withdraw from a subject?",
  "Understand Doctor Before You Regret?",
  "What types of systems do you support?",
  "We Teach You How To Feel Better?",
  "How Can I Contact You?",
  "What's a payment statement?",
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
      console.log(activeIndex);
  };

  return (
    <div className="faq-accordion container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq}
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
