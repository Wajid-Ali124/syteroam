import Link from 'next/link';
import Image from 'next/image';
import homedata from '../../data/homedata.json';

export default function Preface() {
  return (
    <section id="preface" className="sr-preface">
      <div className="sr-preface__container">

        {/* Title */}
        <div className="sr-preface__title-row">
          <div className="sr-preface__title-col">
            <div className="sr-preface__section-title">
              <h2>{homedata.preface.sectiontitle}</h2>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="sr-preface__content-row">

          {/* Image & Circle */}
          <div className="sr-preface__img-col">
            <div className="sr-preface__img-wrap">
              <div className="sr-preface__circle"></div>
              <Image
                className="sr-preface__img"
                src={homedata.preface.imgurl}
                alt="preface"
                width={485}
                height={972}
                style={{ width: '60%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Text & Buttons */}
          <div className="sr-preface__text-col">
            <h3 className="sr-preface__title">{homedata.preface.title}</h3>
            <p className="sr-preface__desc">{homedata.preface.content}</p>
            <div className="sr-preface__apps">
              {/* Note: The old CSS relied on btn and btn-default classes. We'll replicate them under sr-btn / sr-btn-filled classes in preface-specific styles if they aren't globally defined in this way, but keeping the animated style */}
              <Link href="/contact" className="sr-btn sr-btn--filled sr-preface__app-btn px-6! py-4!">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
