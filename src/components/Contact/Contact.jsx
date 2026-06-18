import "./Contact.css";
import { contactData } from "../../data/siteData";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="container">

        <div className="contact-layout">

          <div className="contact-info">

            <span className="contact-tag">Contact Us</span>

            <h2>Let's Build Something Amazing Together</h2>

            <p>
              Have a project in mind?
              We'd love to hear about it.
            </p>

            <div className="contact-details">

              <div>
                <h4>Email</h4>
                <span>{contactData.email}</span>
              </div>

              <div>
                <h4>Phone</h4>
                <span>{contactData.phone}</span>
              </div>

              <div>
                <h4>Location</h4>
                <span>{contactData.location}</span>
              </div>

            </div>

          </div>

          <form className="contact-form">

            <input type="text" placeholder="Your Name"/>

            <input type="email" placeholder="Your Email"/>

            <input type="text" placeholder="Subject"/>

            <textarea rows="6" placeholder="Tell us about your project"/>

            <button type="submit"> Send Message </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;