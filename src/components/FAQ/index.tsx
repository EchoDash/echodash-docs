import React, { useState } from 'react';
import FaqArrow from '@site/static/img/landing/faq-arrow.svg';
import type { ComponentProps } from 'react';
import Heading from '@theme/Heading';

type SvgComponent = React.FC<ComponentProps<'svg'>>;
const FaqArrowIcon = FaqArrow as SvgComponent;

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
  },
  {
    question: "How hard is to use?",
    answer: "We'll be honest setting up webhooks can take from 5-15 minutes depending on how many sources you want integrate."
  },
  {
    question: "What applications do you support?",
    answer: "That's the great thing about webhooks, most services offer them which means no need for integrations, pretty much every major web service allows it, and there's no need for custom development."
  },
  {
    question: "Why should I care?",
    answer: "It's a good question, and with millions of tools vying for your attention, we're grateful you're even reading this. The answer is we really give a shit about solving problems for you, small business founders (which is who we are). Not because we're so selfless, but because if we can solve a problem big enough that you want to pay for, we're building something worth spending our time on."
  },
  {
    question: "Who is this made for?",
    answer: "Small and medium business founders, managers, Csuite and owners, specifically those founders who are somewhat technical but wear multiple hats. If you find yourself constantly checking your email inbox for alerts, keeping lots of tabs logged into different sites open, building Airtable reports or custom building event tools. Then this tool is for you."
  },
  {
    question: "How do you keep my data secure?",
    answer: "You can always delete all your data in the app and we'll purge from our system."
  },
  {
    question: "How can I delete all my data?",
    answer: "Login to your account and delete source by source or delete all your data by deleting your account."
  },
  {
    question: "How do I work with my team?",
    answer: {
      text: "Setup your account and share an invite link following the below instructions:",
      bullets: [
        "Click profile/avatar icon",
        "Click \"Create an Account\"",
        "Type Account Name then click \"Create Account\"",
        "Click on the newly created Account Name",
        "Click \"Invite a User\"",
        "Type a User's Name and Email, choose a Role then click \"Send Invitation\""
      ]
    }
  },
  {
    question: "Why is this better than a Slack channel?",
    answer: "Slack was built for messaging, not as a reporting tool. We want to give you more control over how your data is visualized, and the ability to set alerts for the events that matter most."
  },
  {
    question: "Why should I trust you?",
    answer: "We're not venture funded and don't intend to be, we don't answer to investors, or to some parent company. We too are small business founders, and we built EchoDash because we couldn't get the insights we neeeded out of traditional reporting tools."
  },
  {
    question: "How can I contact you?",
    answer: "You can always email us at hi@echodash.com, or setup a call with <a href='https://calendly.com/alex-clara' target='_blank'>Alex</a>."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderAnswer = (answer: string | { text: string; bullets?: string[] }) => {
    if (typeof answer === 'string') {
      return <p className="tw-text-lg tw-pb-9" dangerouslySetInnerHTML={{ __html: answer }} />;
    }

    return (
      <div>
        <p className="tw-text-lg tw-pb-4" dangerouslySetInnerHTML={{ __html: answer.text }} />
        {answer.bullets && (
          <ul className="tw-pb-9">
            {answer.bullets.map((bullet, i) => (
              <li key={i} className="tw-text-lg" dangerouslySetInnerHTML={{ __html: bullet }} />
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="tw-gap-10 tw-max-w-7xl tw-w-full tw-m-auto tw-flex tw-flex-col tw-items-center">
      <Heading as="h2" className="tw-text-5xl tw-leading-snug tw-text-center">Questions?<br/>We're glad you asked.</Heading>
      <div className="tw-faq-block tw-flex tw-flex-col tw-w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="tw-flex tw-flex-col tw-w-full tw-gap-4 tw-py-2 tw-border-b tw-border-white/20">
            <div 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="tw-flex tw-flex-grow tw-justify-between tw-text-white tw-py-6 hover:tw-text-white focus:tw-text-white tw-cursor-pointer"
            >
              <Heading as="h3" className="tw-text-2xl tw-font-medium">{faq.question}</Heading>
              <FaqArrowIcon 
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