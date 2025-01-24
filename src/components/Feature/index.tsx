import React from 'react';
import BulletArrow from '@site/static/img/landing/bullet-arrow.svg';

interface FeatureProps {
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, bullets, image, imageAlt, reversed = false }) => {
  const ContentSection = () => (
    <div className="tw-w-full tw-flex tw-flex-col tw-gap-20 tw-items-start">
      <h2 className="tw-text-3xl tw-leading-tight lg:tw-text-5xl">{title}</h2>
      <ul className="tw-list-none">
        {bullets.map((bullet, index) => (
          <li key={index} className={`tw-flex tw-gap-4 tw-items-center ${index > 0 ? 'tw-mt-2' : ''} tw-text-xl`}>
            <BulletArrow className="tw-text-white" />{bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  const ImageSection = () => (
    <div className="tw-bg-[#FAFF00] tw-w-full tw-max-h-96 tw-flex tw-flex-shrink-0 tw-rounded-[48px] tw-items-start tw-justify-start tw-overflow-hidden lg:tw-max-w-[600px] lg:tw-max-h-[600px]">
      <img 
        src={image}
        className="tw-max-w-none tw-w-[1440px] tw-ml-24 tw-mt-24 tw-rounded-xl"
        style={{ boxShadow: '-10px -10px 100px rgba(0,0,0,0.3)' }}
        alt={imageAlt}
      />
    </div>
  );

  return (
    <div className={`tw-py-16 tw-gap-16 tw-max-w-7xl tw-m-auto tw-flex ${reversed ? 'tw-flex-col-reverse' : 'tw-flex-col'} tw-items-center lg:tw-py-32 lg:tw-flex-row`}>
      {reversed ? (
        <>
          <ContentSection />
          <ImageSection />
        </>
      ) : (
        <>
          <ImageSection />
          <ContentSection />
        </>
      )}
    </div>
  );
};

export default Feature; 