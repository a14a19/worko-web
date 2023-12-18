import React, { useState } from 'react';
import FaqItem from './FaqItem';
import './Faq.css';
import { faqData } from '../../data/faqData';

function Faq() {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <div className='faqcontainer'>
            <div className='head-list'><h1 className='list' style={{ fontFamily: "Arial" }}>Frequently Asked Questions</h1>
                <h3 className='list-1' style={{ fontWeight: "lighter" }}>Seamlessly use your preferred tools for unified work, start to finish.</h3>
            </div>
            {faqData.map((item, index) => (
                <div className='question' key={index}>
                    <FaqItem
                        key={item.id}
                        index={index}
                        isOpen={index === openIndex}
                        question={item.question}
                        answer={item.answer}
                        onToggle={handleToggle}
                    />
                </div>
            ))}
        </div>


    );
};

export default Faq;
