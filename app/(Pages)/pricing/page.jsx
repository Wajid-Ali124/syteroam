import PricingClient from './PricingClient';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/pricing',
  },
  title: "Pricing – SyteRoam | Simple, Transparent ERP Mobile App Pricing",
  description: "Choose flexible monthly billing or save more with our annual pricing plan for the SyteRoam mobile ERP app.",
};

export default function PricingPage() {
  return <PricingClient />;
}
