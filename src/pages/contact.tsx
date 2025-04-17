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
            href="https://discord.gg/bEZaBrvawK"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-inline-flex tw-items-center tw-px-6 tw-py-3 tw-bg-[#5865F2] hover:tw-text-white tw-text-white tw-rounded-lg tw-transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" style={{ width: '30px', marginRight: '10px' }}><path fill="#fff" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
            Join us on Discord
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