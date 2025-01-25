import React, { useState } from 'react';
import Heading from '@theme/Heading';

const MailjetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/mailjet_optins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error('Subscription failed');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-gap-10 tw-p-12 tw-border-[3px] tw-border-[#FAFF00] tw-rounded-[48px] lg:tw-flex-row">
      <div className="tw-max-w-full lg:tw-max-w-xl">
        <Heading as="h3" className="tw-text-2xl tw-font-medium">
          Get notified when we launch
        </Heading>
        <p className="tw-text-xl">Join our waitlist and be the first to know when EchoDash is ready.</p>
      </div>
      <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-gap-4">
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-4 lg:tw-flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="tw-text-black tw-text-lg tw-font-medium tw-rounded-xl tw-border-none tw-min-w-[400px]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="tw-text-lg tw-border-none tw-font-medium tw-py-2 tw-px-4 tw-rounded-xl tw-cursor-pointer tw-bg-[#FAFF00] tw-text-[#0A0079] hover:tw-bg-[#FAFF00] hover:tw-text-[#0A0079] focus:tw-bg-[#FAFF00] focus:tw-text-[#0A0079] disabled:tw-opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="tw-text-[#FAFF00] tw-mt-2">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="tw-text-red-500 tw-mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default MailjetForm; 