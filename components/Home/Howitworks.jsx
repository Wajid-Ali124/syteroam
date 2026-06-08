import homedata from '../../data/homedata.json';

export default function Howitworks() {
  return (
    <section id="how-it-works" className="sr-howitworks">
      <div className="sr-howitworks__container">
        
        {/* Title Row */}
        <div className="sr-howitworks__row">
          <div className="sr-howitworks__col-title">
            <div className="sr-howitworks__section-title">
              <h2>{homedata.howitworks.sectiontitle}</h2>
            </div>
          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="sr-howitworks__row">
          {homedata.howitworks.features.map((feature, i) => (
            <div key={i} className="sr-howitworks__col">
              
              <div className="sr-howitworks-card">
                <i className={`${feature.icon} sr-howitworks-card__icon`}></i>
                <h3 className="sr-howitworks-card__title">{feature.title}</h3>
                <p className="sr-howitworks-card__text">{feature.content}</p>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
