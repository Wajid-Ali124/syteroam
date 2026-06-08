import Image from 'next/image';
import homedata from '../../data/homedata.json';

export default function KeyFeatures() {
  const { sectiontitle, featurescontent, imgurl1, imgurl2 } = homedata.features;

  return (
    <section id="feature" className="sr-keyfeatures">
      {/* Floating Animated Circle BG */}
      <div className="sr-keyfeatures__circle" />

      <div className="sr-keyfeatures__container">
        {/* Section Title */}
        <div className="sr-keyfeatures__row sr-keyfeatures__row--center">
          <div className="sr-col sr-col-title">
            <div className="sr-section-title">
              <h2 className="sr-section-title__heading">{sectiontitle}</h2>
            </div>
          </div>
        </div>

        <div className="sr-keyfeatures__row sr-keyfeatures__row--align-center">
          {/* Feature List (2x3 Grid on Desktop) */}
          <div className="sr-col sr-col-half-lg">
            <div className="sr-keyfeatures__list-wrap">
              <div className="sr-keyfeatures__row">
                {featurescontent.map((feature, i) => (
                  <div key={i} className="sr-col sr-col-half-sm">
                    <div className="sr-feature-card">
                      <i className={`${feature.icon} sr-feature-card__icon`} />
                      <h3 className="sr-feature-card__title">{feature.title}</h3>
                      <p className="sr-feature-card__text">{feature.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup Right Side */}
          <div className="sr-col sr-col-half-lg">
            <div className="sr-keyfeatures__mockup-wrap">
              <div className="sr-keyfeatures__bordered-box" />
              {/* Note: since icofont and imgurl properties come from homedata.json, we ensure standard relative loading */}
              <Image className="sr-keyfeatures__phone-1" src={imgurl1} alt="Phone Mockup 1" width={438} height={500} style={{ width: '100%', height: 'auto', maxWidth: '438px' }} />
              <Image className="sr-keyfeatures__phone-2" src={imgurl2} alt="Phone Mockup 2" width={450} height={511} style={{ width: '100%', height: 'auto', maxWidth: '450px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
