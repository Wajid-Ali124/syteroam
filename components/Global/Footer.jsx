import Link from 'next/link';
import Image from 'next/image';
import footerdata from '../../data/footerdata.json';

export default function Footer() {
  const data = footerdata;

  return (
    <footer id="footer" className="sr-footer">
      <div className="sr-footer__container">
        <div className="sr-footer__row">
          <div className="sr-footer__col">

            <div className="sr-footer__top">
              <Link className="sr-footer__logo" href="/">
                <Image src={data.footerlogo} alt="logo" width={400} height={121} />
              </Link>
              <p className="sr-footer__text">{data.footertext}</p>``

              {/* <div className="sr-footer__social">
                {data.socialicon.map((item, i) => (
                  <a key={i} href={item.url} className="sr-footer__social-link">
                    <i className={`sr-footer__social-icon ${item.icon}`}></i>
                  </a>
                ))}
              </div> */}
            </div>

            <div className="sr-footer__legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="sr-footer__legal-divider">·</span>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="sr-footer__copyright">
              <p dangerouslySetInnerHTML={{ __html: data.copyrighttext }}></p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
