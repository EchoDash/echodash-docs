import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  return (
    <Layout title="Contact Us">
      <main className="container margin-vert--lg">
        <Heading as="h1">Contact Us</Heading>

        <div className="tw-max-w-lg tw-mx-auto tw-mt-8 tw-mb-12 tw-text-center">
          <Heading as="h2" className="tw-text-xl tw-font-semibold tw-mb-4">Join Our Community</Heading>
          <p className="tw-mb-6">Connect with other EchoDash users and get help from our team in real-time.</p>
          <Link 
            href="https://join.slack.com/t/echodashcommunity/shared_invite/zt-306c0io2s-OolGHPneRVcptUEYSkymXw"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-inline-flex tw-items-center tw-px-6 tw-py-3 tw-bg-[#4A154B] hover:tw-text-white tw-text-white tw-rounded-lg tw-transition-colors"
          >
            <svg style={{ width: '30px', marginRight: '10px' }} enableBackground="new 0 0 2447.6 2452.5" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd"><path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"/><path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"/><path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"/><path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"/></g></svg>
            Join us on Slack
          </Link>
        </div>
        
        <form 
          action="https://formspree.io/f/xbldkrbe" 
          method="POST"
          className="tw-max-w-lg tw-mx-auto tw-mt-8"
        >
          <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-4">
            <div>
              <label htmlFor="firstName" className="tw-block tw-mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="tw-block tw-mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              />
            </div>
          </div>

          <div className="tw-mb-4">
            <label htmlFor="email" className="tw-block tw-mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
            />
          </div>

          <div className="tw-mb-4">
            <label htmlFor="message" className="tw-block tw-mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
            />
          </div>

          <button 
            type="submit"
            className="tw-btn tw-btn-primary tw-px-4 tw-py-2"
            disabled={status === 'loading'}
          >
            Send Message
          </button>

          {status === 'success' && (
            <p className="tw-mt-4 tw-text-green-600">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="tw-mt-4 tw-text-red-600">Failed to send message. Please try again.</p>
          )}
        </form>
      </main>
    </Layout>
  );
} 