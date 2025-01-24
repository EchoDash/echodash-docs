import screenshot from '@site/static/img/landing/ed-screenshot.png';
import screenshot2 from '@site/static/img/landing/ed-screenshot2.png';
import screenshot3 from '@site/static/img/landing/ed-screenshot3.png';
import screenshot4 from '@site/static/img/landing/ed-screenshot4.png';

export interface Feature {
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

export const features: Feature[] = [
  {
    title: "Cure notification blindness.",
    bullets: [
      "Cut down on notifications.",
      "Filter notifications by source or type.",
      "See only the alerts that matter."
    ],
    image: screenshot,
    imageAlt: "EchoDash Screenshot"
  },
  {
    title: "Real time alerts.",
    bullets: [
      "All your apps and services, in real time.",
      "Assign alerts to those responsible.",
      "Customize what you want to see."
    ],
    image: screenshot2,
    imageAlt: "EchoDash Real-time Alerts",
    reversed: true
  },
  {
    title: "Your data stays safe.",
    bullets: [
      "We never sell your data.",
      "You always control how long its retained.",
      "Delete it all, forever, whenever."
    ],
    image: screenshot3,
    imageAlt: "EchoDash Data Safety"
  },
  {
    title: "Slack, off.",
    bullets: [
      "No more crucial events buried in a Slack channel.",
      "Custom alerts and feeds for each team.",
      "An analytics center that tells the story of your data."
    ],
    image: screenshot4,
    imageAlt: "EchoDash Slack Integration",
    reversed: true
  }
]; 