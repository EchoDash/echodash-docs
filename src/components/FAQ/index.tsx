import React, { useState } from 'react';
import FaqArrow from '@site/static/img/landing/faq-arrow.svg';

interface FaqItem {
  question: string;
  answer: string | {
    text: string;
    bullets?: string[];
  };
}

const faqs: FaqItem[] = [
  {
    question: "What is EchoDash?",
    answer: "EchoDash is the only central notification center you need. It takes all the activity, events, alerts and notifications from any software you use and puts them into a real time feed, summarizes your data, and gives you actionable insights."
  },
  {
    question: "How Does EchoDash Work?",
    answer: "In Early Access, EchoDash is webhook based. Copy your unique webhook URL into any tool or service that can send webhooks. EchoDash uses machine learning to build a template for each event, showing the most important data points. You can then customize the template to fit your needs."
  },
  {
    question: "What's a webhook?",
    answer: "Is a simple way to send activity or data from any software you use to anywhere you want including EchoDash."
  },
  {
    question: "What tools can I use with EchoDash?",
    answer: "Any tool that can send webhooks. This includes Stripe, WooCommerce, Calendly, Github, Jira, and many more. We're adding native integrations for tools that don't support webhooks."
  },
  {
    question: "How much does it cost?",
    answer: "During early access, EchoDash is completely free. After launch, the event feed will remain free forever. We'll add paid features later based on your feedback."
  },
  {
    question: "What's coming in future updates?",
    answer: {
      text: "Webhooks are just the beginning. We want EchoDash to be a central portal for managing all your real-time events online. We're currently working on:",
      bullets: [
        "Real-time events from inbound emails.",
        "Create charts and reports from your event data.",
        "Group sources and specific events into pinned views.",
        "Set alerts based on event criteria, and trigger notifications by email, SMS, or Slack.",
        "Daily, weekly, and monthly email digests.",
        "Google Sheets and Airtable integrations.",
        "Route specific events or your entire feed to Slack and Discord."
      ]
    }
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderAnswer = (answer: string | { text: string; bullets?: string[] }) => {
    if (typeof answer === 'string') {
      return <p className="tw-text-lg tw-pb-9">{answer}</p>;
    }

    return (
      <div>
        <p className="tw-text-lg tw-pb-4">{answer.text}</p>
        {answer.bullets && (
          <ul className="tw-pb-9">
            {answer.bullets.map((bullet, i) => (
              <li key={i} className="tw-text-lg">{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="tw-gap-10 tw-max-w-7xl tw-w-full tw-m-auto tw-flex tw-flex-col tw-items-center">
      <h2 className="tw-text-5xl tw-leading-snug tw-text-center">Questions?<br/>We're glad you asked.</h2>
      <div className="tw-faq-block tw-flex tw-flex-col tw-w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="tw-flex tw-flex-col tw-w-full tw-gap-4 tw-py-2 tw-border-b tw-border-white/20">
            <div 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="tw-flex tw-flex-grow tw-justify-between tw-text-white tw-py-6 hover:tw-text-white focus:tw-text-white tw-cursor-pointer"
            >
              <span className="tw-text-2xl tw-font-medium">{faq.question}</span>
              <FaqArrow 
                className={`tw-text-white tw-transition-transform ${openIndex === index ? 'tw-rotate-180' : 'tw-rotate-0'}`} 
              />
            </div>
            <div className={openIndex === index ? '' : 'tw-hidden'}>
              {renderAnswer(faq.answer)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 