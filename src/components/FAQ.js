import React, { useState } from 'react';
import FaqArrow from '@site/static/img/landing/faq-arrow.svg';

export function FAQItem({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-gap-4 tw-py-2 tw-border-b tw-border-white/20">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="tw-flex tw-flex-grow tw-justify-between tw-text-white tw-py-6 hover:tw-text-white focus:tw-text-white tw-cursor-pointer"
      >
        <span className="tw-text-2xl tw-font-medium">{question}</span>
        <FaqArrow className={`tw-text-white ${isOpen ? 'tw-rotate-180' : 'tw-rotate-0'}`} />
      </div>
      <div className={`${isOpen ? '' : 'tw-hidden'}`}>
        {children}
      </div>
    </div>
  );
} 