import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./style.css";

export default function Accordion({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul className="accordion-content">
          {data.map((item, index) => (
            <li key={index} className="accordion-item">
              <strong>{item.title}</strong> <br />
              <span className="subtitle">{item.subtitle}</span>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}