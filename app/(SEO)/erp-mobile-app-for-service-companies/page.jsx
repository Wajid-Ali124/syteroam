import SytelineMobileErpForServiceTeamsClient from './SytelineMobileErpForServiceTeamsClient';
import pageData from '@/data/page-syteline-mobile-erp-for-service-teams.json';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/erp-mobile-app-for-service-companies',
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

export default function SytelineMobileErpForServiceTeamsPage() {
  return <SytelineMobileErpForServiceTeamsClient />;
}
