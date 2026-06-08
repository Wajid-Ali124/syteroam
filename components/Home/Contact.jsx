import homedata from '../../data/homedata.json';

export default function Contact() {
  return (
    <section id="contact" className="sr-contact">
      <div className="sr-contact__container">
        
        {/* Title */}
        <div className="sr-contact__title-row">
          <div className="sr-contact__title-col">
            <div className="sr-contact__section-title">
              <h2>{homedata.contact.title}</h2>
            </div>
          </div>
        </div>

        {/* Content columns (Equal Height Row) */}
        <div className="sr-contact__content-row">
          
          {/* Address Sidebar */}
          <div className="sr-contact__address-col">
            <div className="sr-contact__address-wrap">
              
              <div className="sr-contact__address-box">
                <i className={`${homedata.contact.contactinfo.address.icon} sr-contact__icon`}></i>
                <h5 className="sr-contact__box-title">{homedata.contact.contactinfo.address.title}</h5>
                <p className="sr-contact__box-text" dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.address.info}}></p>
              </div>

              <div className="sr-contact__address-box">
                <i className={`${homedata.contact.contactinfo.phone.icon} sr-contact__icon`}></i>
                <h5 className="sr-contact__box-title">{homedata.contact.contactinfo.phone.title}</h5>
                <p className="sr-contact__box-text" dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.phone.info}}></p>
              </div>

              <div className="sr-contact__address-box sr-contact__address-box--last">
                <i className={`${homedata.contact.contactinfo.email.icon} sr-contact__icon`}></i>
                <h5 className="sr-contact__box-title">{homedata.contact.contactinfo.email.title}</h5>
                <p className="sr-contact__box-text" dangerouslySetInnerHTML={{__html: homedata.contact.contactinfo.email.info}}></p>
              </div>

            </div>
          </div>

          {/* Form Content */}
          <div className="sr-contact__form-col">
            <div className="sr-contact__form-wrap">
              <h3 className="sr-contact__form-title">{homedata.contact.formtitle}</h3>
              <p className="sr-contact__form-desc">{homedata.contact.formdescription}</p>
              
              <form id="contact-form" onSubmit={(e) => { e.preventDefault(); e.target.reset(); }}>
                {/* Form status (hidden by default) */}
                <div className="sr-contact__form-message">
                  <p className="sr-contact__msg sr-contact__msg--success">
                    <i className="icon icon-icon-check-alt2"></i> Your quote has successfully been sent. 
                    <button type="button" className="sr-contact__msg-close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </p>
                  <p className="sr-contact__msg sr-contact__msg--error">
                    <i className="icon icon-icon-close-alt2"></i> Something went wrong! 
                    <button type="button" className="sr-contact__msg-close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </p>
                </div>
                
                <div className="sr-contact__input-group">
                  <input name="name" className="sr-contact__input" type="text" placeholder="Your Name" required />
                </div>
                
                <div className="sr-contact__input-group">
                  <input name="email" className="sr-contact__input" type="email" placeholder="Your Email" required />
                </div>
                
                <div className="sr-contact__input-group">
                  <input name="subject" className="sr-contact__input" type="text" placeholder="Subject" required />
                </div>
                
                <div className="sr-contact__input-group sr-contact__input-group--mb30">
                  <textarea name="message" className="sr-contact__textarea" placeholder="Your Message" required></textarea>
                </div>
                
                <button className="sr-btn sr-btn--filled">Send Now</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
