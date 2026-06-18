import { servicesData } from "../../data/siteData";
import "./Services.css"

function Services() {
  return (
    <section id="services">
      
      <div className="container">

        <div className="section-header">
          
          <span>Services</span>

          <h2>Solutions Built for Modern Businesses</h2>

          <p> We deliver technology solutions that help businesses
            scale, automate and innovate.
          </p>
        
        </div>
        
        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="service-card"
              >
                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-link">
                  Learn More →
                </span>
              </div>
            );
          })}
        </div>
          
      </div>

    </section>
  );
}

export default Services;