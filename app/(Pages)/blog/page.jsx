import BlogClient from './BlogClient';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/blog',
  },
  title: "Blog – SyteRoam | ERP Mobile App & SyteLine Insights",
  description: "Read the latest articles, guides, and industry news about SyteRoam, the primary mobile erp app solution for SyteLine.",
  keywords: [
    "SyteLine mobile app blog",
    "mobile erp app",
    "erp mobile app",
    "erp android app",
    "SyteLine erp mobile app",
    "erp system mobile application",
    "SyteRoam news"
  ],
};

export default function BlogPage() {
  return <BlogClient />;
}
