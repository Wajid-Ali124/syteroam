import Link from 'next/link';
import Image from 'next/image';
import homedata from '../../data/homedata.json';

export default function Heroarea() {
  const { title, content, btn1url, btn1label, btn2url, btn2label, imgurl1 } = homedata.heroarea;

  return (
    <section className="sr-hero" id="home">
      {/* Background Circles */}
      <div className="sr-hero__circle sr-hero__circle--x1" />
      <div className="sr-hero__circle sr-hero__circle--x2" />
      <div className="sr-hero__circle sr-hero__circle--x3" />
      <div className="sr-hero__circle sr-hero__circle--x4" />
      <div className="sr-hero__circle sr-hero__circle--x5" />
      <div className="sr-hero__circle sr-hero__circle--x6" />
      <div className="sr-hero__circle sr-hero__circle--x7" />
      <div className="sr-hero__circle sr-hero__circle--x8" />
      <div className="sr-hero__circle sr-hero__circle--x9" />
      <div className="sr-hero__circle sr-hero__circle--x10" />

      {/* Hero Content */}
      <div className="sr-hero__container">
        <div className="sr-hero__row">
          <div className="sr-hero__col">
            <div className="sr-hero__content">
              <h1 className="sr-hero__title">{title}</h1>
              <p className="sr-hero__text">{content}</p>
              
              <div className="sr-hero__btn-wrapper">
                <Link href={'/' + btn1url} className="sr-hero__btn sr-hero__btn--default">
                  {btn1label}
                </Link>
                <Link href={`/${btn2url}`} className="sr-hero__btn sr-hero__btn--outline">
                  {btn2label}
                </Link>
              </div>
            </div>
          </div>
          
          <div className="sr-hero__col">
            <div className="sr-hero__mockup-wrap">
              <Image className="sr-hero__mockup" src={imgurl1} alt="SyteRoam SyteLine ERP Mobile App Preview — Android & iOS" width={478} height={588} priority style={{ width: '100%', height: 'auto', maxWidth: '478px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
