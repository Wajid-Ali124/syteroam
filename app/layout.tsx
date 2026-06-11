import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import GlobalLinkTracker from "@/components/Global/GlobalLinkTracker";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syteroam.com"),
  title: "syteroam",
  description: "syteroam Next.js App",
  verification: {
    google: "3eGbbmn8Cxv4CH97B2S71BfB5lCaEKvMgdMakTC2TWY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${quicksand.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P8BSZTCQ');`}
        </Script>
        
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TF35H5K2SF"
          strategy="lazyOnload"
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TF35H5K2SF');`}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){ 
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; 
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
          })(window, document, "clarity", "script", "w5d7cfdkpq");`}
        </Script>

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SyteRoam",
              "url": "https://www.syteroam.com/",
              "logo": "https://www.syteroam.com/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-949-284-8115",
                  "contactType": "customer service",
                  "areaServed": "US",
                  "availableLanguage": ["English"]
                }
              ],
              "email": [
                "sales@quadkor.com",
                "support@quadkor.com"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9655 Granite Ridge Drive, Suite 200",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92123",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8BSZTCQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <GlobalLinkTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
