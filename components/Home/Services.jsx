import homedata from '../../data/homedata.json';

export default function Services() {
  return (
    <section id="services" className="sr-services">
      <div className="sr-services__container">
        <div className="sr-services__row">
          
          {homedata.services.map((service, i) => (
            <div key={i} className="sr-services__col">
              
              {/* Service Hover Block */}
              <div className="sr-services-card">
                <i className={`${service.icon} sr-services-card__icon`}></i>
              <h3 className="sr-services-card__title">{service.title}</h3>
                <p className="sr-services-card__text">{service.content}</p>
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
