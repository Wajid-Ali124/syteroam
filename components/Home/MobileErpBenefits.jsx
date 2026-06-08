import homedata from '../../data/homedata.json';

export default function MobileErpBenefits() {
  const { sectiontitle, benefits } = homedata.mobileErpBenefits;

  return (
    <section id="mobile-erp-benefits" className="sr-mobileerp">
      <div className="sr-mobileerp__container">

        {/* Section Title */}
        <div className="sr-mobileerp__title-row">
          <div className="sr-mobileerp__title-col">
            <div className="sr-mobileerp__section-title">
              <h2>{sectiontitle}</h2>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="sr-mobileerp__grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="sr-mobileerp__item">
              <div className="sr-mobileerp-card">
                <h3 className="sr-mobileerp-card__title">{benefit.title}</h3>
                <p className="sr-mobileerp-card__text">{benefit.content}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
