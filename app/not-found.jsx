import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "404 - Page Not Found | SyteRoam",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="sr-not-found min-h-[80vh] flex items-center justify-center p-[100px_15px] relative overflow-hidden">

      {/* Force Navbar to be active/solid on this utility page without polluting global state */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .sr-navbar {
          background-color: #5a02b4 !important;
          box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
        }
      `}} />

      {/* Decorative background circle */}
      <div className="sr-hero__circle w-[600px] h-[600px] top-[-10%] left-[-10%] absolute -z-10 rounded-full bg-linear-to-br from-[#6509e2] to-[#5a02b4] opacity-10" />

      <div className="text-center max-w-[600px] relative z-10 mx-auto">
        <Image
          src="/assets/img/404.png"
          alt="404 Page Not Found"
          width={1773}
          height={1034}
          className="max-w-[80%] h-auto mb-[30px] mx-auto"
          style={{ width: '100%', height: 'auto', maxWidth: '1773px' }}
        />

        <h2 className="sr-section-title__heading mb-[20px]">
          Oops! Page Not Found
        </h2>

        <p className="text-[#858585] mb-[40px] text-[18px] font-['Quicksand'] leading-[1.6]">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <Link href="/" className="sr-btn sr-btn--filled inline-block px-[40px]! py-[15px]!">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
