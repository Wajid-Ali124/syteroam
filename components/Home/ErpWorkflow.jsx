import homedata from '../../data/homedata.json';

export default function ErpWorkflow() {
  const { sectiontitle, content } = homedata.erpWorkflow;

  return (
    <section id="erp-workflow" className="sr-erpworkflow">
      {/* Decorative Circle */}
      <div className="sr-erpworkflow__circle" />

      <div className="sr-erpworkflow__container">
        <div className="sr-erpworkflow__inner">

          {/* Accent bar + label */}
          <div className="sr-erpworkflow__label">
            <span className="sr-erpworkflow__accent-bar" />
            <span className="sr-erpworkflow__label-text">ERP BUILT FOR YOUR REALITY</span>
          </div>

          {/* Main heading */}
          <h2 className="sr-erpworkflow__title">{sectiontitle}</h2>

          {/* Divider */}
          <div className="sr-erpworkflow__divider" />

          {/* Body paragraph */}
          <p className="sr-erpworkflow__text">{content}</p>

        </div>
      </div>
    </section>
  );
}
