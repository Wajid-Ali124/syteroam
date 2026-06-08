import MobileErpSolutionsClient from './MobileErpSolutionsClient';
import pageData from '@/data/page-mobile-erp-solutions.json';

export const metadata = {
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

export default function MobileErpSolutionsPage() {
  return <MobileErpSolutionsClient />;
}
