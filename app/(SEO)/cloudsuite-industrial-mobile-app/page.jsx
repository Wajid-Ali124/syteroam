import CloudSuiteIndustrialMobileAppClient from './CloudSuiteIndustrialMobileAppClient';
import pageData from '@/data/page-cloudsuite-industrial-mobile-app.json';

export const metadata = {
  alternates: {
    canonical: '/cloudsuite-industrial-mobile-app',
  },
  title: pageData.meta.title,
  description: pageData.meta.description,
  keywords: pageData.meta.keywords,
  openGraph: {
    title: pageData.meta.title,
    description: pageData.meta.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.meta.title,
    description: pageData.meta.description,
  },
};

export default function CloudSuiteIndustrialMobileAppPage() {
  return <CloudSuiteIndustrialMobileAppClient />;
}
