import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  return (
    <Layout title="Contact Us">
      <main className="container margin-vert--lg">
        <Heading as="h1">Contact Us</Heading>
        
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