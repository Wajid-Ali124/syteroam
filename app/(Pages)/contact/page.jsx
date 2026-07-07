import ContactClient from './ContactClient';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact',
  },
  title: "Contact Us — SyteRoam | SyteLine ERP Mobile App",
  description: "Get in touch with the SyteRoam team. Ask us about connecting to your CloudSuite Industrial instance, pricing, or enterprise deployments.",
};

export default function ContactPage() {
  return <ContactClient />;
}
