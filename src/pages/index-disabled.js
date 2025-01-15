import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

// Import landing-specific styles
// import '../css/landing.css';

// Example import:
// import BulletArrow from '@site/static/img/landing/bullet-arrow.svg';
// ... other imports

export default function Home() {
  return (
    <Layout
      title="EchoDash - Keep tabs on everything without opening one"
      description="All you need to know about your business in one place">
      
      <div className="py-8 gap-6 max-w-7xl m-auto flex flex-col items-start justify-center lg:py-32">
        <span className="bright text-lg">Free to get started. No credit card needed.</span>
        <h1 className="text-5xl leading-none tracking-wider mb-2 lg:text-[108px]">
          Keep tabs on everything without opening one.
        </h1>
        {/* Convert the rest of your ERB template to JSX */}
        {/* Replace <%= %> with {} */}
        {/* Convert class= to className= */}
        {/* Convert Rails link_to helpers to <Link> components */}
      </div>
      
      {/* ... rest of your landing page content ... */}
    </Layout>
  );
}
