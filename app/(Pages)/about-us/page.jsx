import AboutClient from './AboutClient';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/about-us',
  },
  title: "About Us – SyteRoam | Native Mobile ERP App",
  description: "We engineered SyteRoam to bridge the gap in the industrial sector. Discover our story and how we redefine ERP mobility for CloudSuite Industrial SyteLine.",
};

export default function AboutPage() {
  return <AboutClient />;
}
