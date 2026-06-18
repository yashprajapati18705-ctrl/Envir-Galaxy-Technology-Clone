import { featuresData } from "../../data/siteData";
import "./WhyChooseUs.css"

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">

      <div className="container">

        <div className="why-us-layout">

          <div className="why-content">

            <span className="why-tag">
              Why Choose Us
            </span>

            <h2>
              Technology Built Around Your Growth
            </h2>

            <p>
              We combine innovation, expertise and reliability
              to help businesses succeed in a digital world.
            </p>

            <div className="benefits">

              {featuresData.map((feature) => (
                <div
                  key={feature.title}
                  className="benefit-item"
                >
                  <span>✓</span>

                  <div>
                    <h4>{feature.title}</h4>

                    <p>{feature.description}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="why-visual">

            <div className="visual-card">

              <h3>100+</h3>

              <p>Projects Delivered</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;