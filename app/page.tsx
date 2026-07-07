import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Static Imports for Above-the-Fold and standard components
import Heroarea from '@/components/Home/Heroarea';
import Feature from '@/components/Home/KeyFeatures';
import FeatureTwo from '@/components/Home/FeatureTwo';
import Services from '@/components/Home/Services';
import Howitworks from '@/components/Home/Howitworks';
import Preface from '@/components/Home/Preface';
import MobileErpBenefits from '@/components/Home/MobileErpBenefits';
import ErpWorkflow from '@/components/Home/ErpWorkflow';

// Dynamic Imports for heavy interactive sliders living below the fold (optimizes INP / LCP)
const Screenshots = dynamic(() => import('@/components/Home/Screenshots'));
const Testimonials = dynamic(() => import('@/components/Home/Testimonials'));


export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  title: "SyteRoam — The #1 SyteLine ERP Mobile App for Manufacturing",
  description: "SyteRoam is the leading SyteLine mobile app and ERP system mobile application for CloudSuite Industrial users. A native mobile ERP app for Android and iOS — built for manufacturing, service, and field teams.",
  keywords: "mobile erp app, erp mobile app, erp system mobile application, erp android app, SyteLine mobile app, SyteLine erp mobile app, CloudSuite Industrial mobile, ERP for manufacturing, SyteRoam",
  openGraph: {
    title: "SyteRoam — SyteLine ERP Mobile App for Manufacturing",
    description: "SyteRoam is the native SyteLine ERP mobile app — a touch-first ERP system mobile application for Android and iOS. Purpose-built for manufacturing and service companies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyteRoam — SyteLine ERP Mobile App for Manufacturing",
    description: "SyteRoam is the native SyteLine ERP mobile app — a touch-first ERP system mobile application for Android and iOS. Purpose-built for manufacturing and service companies.",
  },
};

export default function Home() {
  return (
    <>
      <Heroarea />
      <Feature />
      <FeatureTwo />
      <Services />
      <Howitworks />
      <Screenshots />
      <Preface />
      <Testimonials />
      <MobileErpBenefits />
      <ErpWorkflow />
    </>
  );
}
