import ManufacturingErpMobileAppClient from './ManufacturingErpMobileAppClient';
import pageData from '@/data/page-manufacturing-erp-mobile-app.json';

export const metadata = {
  alternates: {
    canonical: '/manufacturing-erp-mobile-app',
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

export default function ManufacturingErpMobileAppPage() {
  return <ManufacturingErpMobileAppClient />;
}
