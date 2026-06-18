import "./Testimonials.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { testimonialsData } from "../../data/siteData";
import { testimonialsData } from "../../data/siteData";

function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => prev === testimonialsData.length-1 ? 0 : prev+1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonialsData.length -1 : prev-1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-header">

          <span>Testimonials</span>

          <h2>
            What Our Clients Say
          </h2>

        </div>

        <div className="testimonial-card">

            <AnimatePresence mode="wait">

            <motion.div
              key={currentIndex}

              initial={{ opacity: 0, x: 60, scale: 0.98}}

              animate={{ opacity: 1,x: 0, scale: 1}}

              exit={{ opacity: 0, x: -60, scale: 0.98}}

              transition={{type: "spring",stiffness: 80,damping: 20}}

              className="testimonial-content"
            >

              <div className="quote-mark">
                " 
                <p className="review">
                  {current.review}
                </p> 

              </div>

              <div className="stars">⭐⭐⭐⭐⭐</div>

              <h4>{current.name}</h4>

              <span>{current.company}</span>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;