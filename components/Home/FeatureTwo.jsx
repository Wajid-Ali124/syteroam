import Image from 'next/image';
import homedata from '../../data/homedata.json';

export default function FeatureTwo() {
  const { title, content, btn1label, btn1url, btn2label, btn2url, imgurl1, imgurl2 } = homedata.feature2;

  return (
    <section id="feature2" className="sr-featuretwo">
      {/* Absolute decorative circle overlay */}
      <div className="sr-featuretwo__circle" />

      <div className="sr-featuretwo__container">
        <div className="sr-featuretwo__row">

          {/* Main App Content & Store CTA */}
          <div className="sr-featuretwo__col">
            <h2 className="sr-featuretwo__title">{title}</h2>
            <p className="sr-featuretwo__text">{content}</p>

            <div className="sr-featuretwo__download-container">
              <div className="sr-featuretwo__download-card">
                <a target="_blank" rel="noopener noreferrer" href={btn1url} className="sr-btn sr-btn--filled sr-featuretwo__app-btn">
                  <i className="icofont-brand-android-robot sr-featuretwo__app-btn__icon" />
                  <span dangerouslySetInnerHTML={{ __html: btn1label }} />
                </a>
                <div className="sr-featuretwo__qr-container">
                  <Image src="/assets/img/GoogleStore.png" alt="Google Play Store QR Code" width={100} height={100} className="sr-featuretwo__qr-code" style={{ width: '100%', height: '100%' }} />
                  <span className="sr-featuretwo__qr-text">Scan for Android</span>
                </div>
              </div>

              <div className="sr-featuretwo__download-card">
                <a target="_blank" rel="noopener noreferrer" href={btn2url} className="sr-btn sr-btn--filled sr-featuretwo__app-btn">
                  <i className="icofont-brand-apple sr-featuretwo__app-btn__icon" />
                  <span dangerouslySetInnerHTML={{ __html: btn2label }} />
                </a>
                <div className="sr-featuretwo__qr-container">
                  <Image src="/assets/img/AppleStore.png" alt="Apple App Store QR Code" width={100} height={100} className="sr-featuretwo__qr-code" style={{ width: '100%', height: '100%' }} />
                  <span className="sr-featuretwo__qr-text">Scan for iOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Double Mockup Layout */}
          <div className="sr-featuretwo__col">
            <div className="sr-featuretwo__mockup-wrap">
              <Image className="sr-featuretwo__phone-1" src={imgurl1} alt="Mobile Mockup Left" width={450} height={287} style={{ width: '100%', height: 'auto', maxWidth: '450px' }} />
              <Image className="sr-featuretwo__phone-2" src={imgurl2} alt="Mobile Mockup Right" width={450} height={288} style={{ width: '100%', height: 'auto', maxWidth: '450px' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
