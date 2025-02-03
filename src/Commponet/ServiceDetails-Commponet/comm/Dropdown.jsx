/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './comm.css'
import { Accordion } from "react-bootstrap";

const faqData = [
  {
    question: "How Doctor Can Ease Your Pain?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "How do I withdraw from a subject?",
    answer:
      "You can withdraw from a subject by contacting the administration or following the withdrawal guidelines provided."
  },
  {
    question: "Understand Doctor Before You Regret?",
    answer:
      "It is essential to understand a doctor's expertise and credentials before making any medical decisions."
  },
  {
    question: "What types of systems do you support?",
    answer:
      "We support multiple systems, including web applications, mobile platforms, and cloud-based services."
  },
  {
    question: "We Teach You How To Feel Better?",
    answer:
      "Our wellness programs are designed to help individuals lead a healthier and happier lifestyle."
  }
];

const FAQAccordion = () => {
  return (
    <div className="container mt-4" style={{position:'relative'}}>
      <Accordion defaultActiveKey="0">
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} style={{border:'none'}}> 
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
