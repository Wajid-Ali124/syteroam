import FAQClient from './FAQClient';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/faq',
  },
  title: "FAQ – SyteRoam | SyteLine ERP Mobile App Questions Answered",
  description: "Find answers to common questions about the SyteLine ERP mobile app, the SyteRoam erp mobile app for Android and iOS, and how it compares to traditional ERP system mobile applications.",
  keywords: [
    "SyteLine mobile app FAQ",
    "mobile erp app",
    "erp mobile app",
    "erp android app",
    "SyteLine erp mobile app",
    "erp system mobile application",
    "SyteRoam FAQ"
  ],
};

export default function FAQPage() {
  return <FAQClient />;
}
