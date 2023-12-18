import React from 'react';

const FaqItem = ({ index, isOpen, question, answer, onToggle }) => {
  const handleClick = () => {
    onToggle(index);

    window.scrollTo({
      top: document.getElementById(`faq-item-${index}`).offsetTop - 50, // Adjust offset as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="faqcontainer" id={`faq-item-${index}`}>
      <div onClick={handleClick} className="faq-question">
        <h3 className="faq-question" style={{ color: "rgb(148, 151, 158)", fontWeight: "lighter" }}>
          {question}  </h3>  <span className="icon-st">{isOpen ? '×' : '+'}</span>

      </div>
      {isOpen && <strong className="faq-answer" style={{ color: 'rgb(148, 151, 158)', fontFamily: 'sans-serif' }} >{answer}</strong>}
    </div>
  );
};

export default FaqItem;
