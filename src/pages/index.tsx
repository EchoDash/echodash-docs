import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Import images
import screenshot from '@site/static/img/landing/ed-screenshot.png';
import CircleArrow from '@site/static/img/landing/circle-arrow-right.svg';

// Import components and data
import Feature from '../components/Feature';
import FAQ from '../components/FAQ';
import { features } from '../data/features';
import MailjetForm from '../components/MailjetForm';

export default function Home() {

  return (
    <Layout
      title="EchoDash - Keep tabs on everything without opening one"
      description="All you need to know about your business in one place"
    >

      <main className="flex-grow tw-px-8 lg:tw-px-0">

        {/* Hero Section */}
        <div className="tw-py-8 tw-gap-6 tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-start tw-justify-center lg:tw-py-32">
            <span className="tw-bright tw-text-lg">Free to get started. No credit card needed.</span>
            <Heading as="h1" className="tw-text-4xl tw-leading-tight tw-tracking-wider tw-mb-2 tw-max-w-full tw-break-words lg:tw-text-[108px] lg:tw-leading-none">
            Keep tabs on everything without opening one.
            </Heading>
            <p className="tw-mb-6 tw-text-white-700 dark:tw-text-white-200 tw-leading-normal tw-text-xl">
            All you need to know about your business in one place. See all activity across every tool you use to manage your business.<br/>
            Stripe transactions, WooCommerce abandoned carts, Calendly bookings — everything.
            </p>
            
            <div className="tw-flex tw-flex-col tw-items-center md:tw-flex-row">
            <Link 
                to="/users/sign_in"
                target="_blank"
                className="tw-btn tw-btn-primary tw-py-3 tw-px-6 tw-text-lg tw-block tw-text-center tw-bg-[#FAFF00] tw-text-[#0A0079] hover:tw-bg-[#FAFF00] hover:tw-text-[#0A0079] focus:tw-bg-[#FAFF00] focus:tw-text-[#0A0079]"
            >
                Request Early Access
            </Link>
            </div>
        </div>

        {/* Skewed Screenshot Section */}
        <div 
            className="tw-relative tw--mt-64 tw--ml-10 tw-flex tw-justify-start tw-h-[600px] tw-overflow-hidden tw--z-10 [mask-size:130%] tw-w-[120%] lg:tw-w-auto lg:tw-h-[1400px] lg:tw-ml-0"
            style={{
            maskImage: 'url(/img/landing/hero-mask.svg)',
            maskPosition: '65% 100%',
            maskComposite: 'exclude'
            }}
        >
            <img 
            src={screenshot}
            className="tw-absolute tw-transform tw-skew-x-[22deg] tw--skew-y-[13deg] tw-max-w-none tw-rounded-xl tw-animate-slideIn tw-w-[600px] tw-h-[400px] tw-left-[100px] tw-top-[260px] lg:tw-top-48 lg:tw-left-48 lg:tw-w-[1440px] lg:tw-h-[900px]"
            style={{ boxShadow: '-10px -10px 200px rgba(0,0,0,0.5)' }}
            alt="EchoDash Screenshot"
            loading="eager"
            />
        </div>

        {/* Email Signup Section */}
        <div className="tw-max-w-7xl tw-mx-auto tw-mb-24 tw-flex tw-flex-col tw-items-center">
            <MailjetForm />
        </div>

        {/* Why EchoDash Section */}
        <div className="tw-pb-8 tw-gap-6 tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-start tw-justify-center lg:tw-pb-32">
            <span className="tw-bright tw-text-2xl tw-font-medium">
            Why EchoDash?
            </span>
            <Heading as="h2" className="tw-text-3xl tw-leading-tight lg:tw-text-5xl">
            Understand anything about your business from failed payments, form submissions, churn, CPC, analytics, web traffic, website errors, abandoned carts, Calendly bookings, Github commits or Jira alerts, Stripe notifications and much more. Alerts from every tool you use in once place.
            </Heading>
        </div>

        {/* Feature Sections */}
        {features.map((feature, index) => (
            <Feature key={index} {...feature} />
        ))}

        <div className="tw-py-8 tw-gap-10 tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-center tw-text-center lg:tw-text-left lg:tw-py-32">
            <span className="tw-bright tw-text-xl tw-font-medium">Free to get started. No credit card needed.</span>
            <Heading as="h2" className="tw-text-6xl tw-leading-none tw-text-center tw-text-[#0A0079] lg:tw-text-9xl">
            <span className="tw-block tw-w-full tw-text-white">Free</span> 
            <span style={{ textShadow: '2px 2px 0 #FAFF00, -2px 2px 0 #FAFF00, -2px -2px 0 #FAFF00, 2px -2px 0 #FAFF00' }}>while in early access</span>
            </Heading>
            <p className="tw-text-white tw-text-center tw-text-xl">EchoDash's first product, the event feed, will be <u>free forever</u>.<br/>Help us prioritize what to build next.</p>

            {/* Pricing Section */}
            <div className="tw-w-full tw-mb-16 tw-mt-4 tw-m-auto tw-flex tw-items-end tw-border-[3px] tw-border-[#FAFF00] tw-rounded-[48px] tw-overflow-hidden lg:tw-mb-32">
            <div className="tw-px-12 tw-py-16 tw-flex tw-flex-col tw-gap-10 tw-w-full lg:tw-max-w-lg">
                <div className="tw-flex tw-flex-col tw-gap-2">
                <Heading as="h3" className="tw-text-5xl">Free</Heading>
                <span className="tw-text-xl">(During early access)</span>
                </div>
                <Heading as="h3">
                    <span className="tw-text-7xl tw-mr-2">$0</span><span className="tw-text-5xl">/month</span>
                </Heading>
                <span className="tw-text-xl">Keep tabs on everything.</span>
                <Link 
                to="/users/sign_in"
                target="_blank"
                className="tw-btn tw-btn-primary tw-p-3 tw-text-lg tw-block tw-text-center tw-bg-[#FAFF00] tw-text-[#0A0079] hover:tw-bg-[#FAFF00] hover:tw-text-[#0A0079] focus:tw-bg-[#FAFF00] focus:tw-text-[#0A0079]"
                >
                Get Started
                </Link>
                <hr className="tw-border-white/20" />
                <ul className="tw-list-none tw-text-left">
                <li className="tw-flex tw-gap-4 tw-items-center tw-mt-2 tw-text-xl">
                    <CircleArrow className="tw-text-white" />Unlimited sources
                </li>
                <li className="tw-flex tw-gap-4 tw-items-center tw-mt-2 tw-text-xl">
                    <CircleArrow className="tw-text-white" />Unlimited team members
                </li>
                <li className="tw-flex tw-gap-4 tw-items-center tw-mt-2 tw-text-xl">
                    <CircleArrow className="tw-text-white" />Unlimited awesomeness
                </li>
                </ul>
            </div>
            <div className="tw-relative tw-overflow-hidden tw-w-full tw-h-[640px] tw-hidden lg:tw-block">
                <img 
                src={screenshot}
                className="tw-max-w-none tw-w-[1440px]"
                alt="EchoDash Screenshot"
                />
            </div>
            </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer CTA Section */}
        <div className="tw-pt-48 tw-pb-8 tw--mt-24 tw-gap-10 tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-center tw-bg-[url('/img/landing/bg-pattern.png')] tw-bg-bottom tw-bg-no-repeat lg:tw-pt-96 lg:tw-pb-72">
          <Heading as="h2" className="tw-text-6xl tw-leading-none tw-text-center lg:tw-text-[108px]">Get looped in.</Heading>
          <p className="tw-text-xl tw-text-center">If you start now you can be saving time in no time.</p>
            <Link 
            to="/users/sign_in"
            target="_blank"
            className="tw-btn tw-btn-primary tw-py-3 tw-px-6 tw-text-lg tw-block tw-text-center tw-bg-[#FAFF00] tw-text-[#0A0079] hover:tw-bg-[#FAFF00] hover:tw-text-[#0A0079] focus:tw-bg-[#FAFF00] focus:tw-text-[#0A0079]"
            >
            Request Early Access
            </Link>
        </div>
    </main>
    </Layout>

  );
} 