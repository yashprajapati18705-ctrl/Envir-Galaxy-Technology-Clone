import { heroData } from "../../data/siteData";
import "./Hero.css";
import Reveal from "../Reveal/Reveal";

function Hero() {
  return (
    <Reveal>
      <section id="hero" className="hero">
      
        <div className="container">
          
          <div className="hero-content">

            <div className="hero-badge">
              {heroData.badge}
            </div>

            <h1>{heroData.title}</h1>
            
            <p className="hero-description">
              {heroData.description}
            </p>
            
            <div className="hero-buttons">
              
              <button className="primary-btn">{heroData.primaryBtn}</button>
              
              <button className="secondary-btn">{heroData.secondaryBtn}</button>
            
            </div>

            <div className="stat-card-container">
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
        
          </div>
        
        </div>
      
      </section>
    </Reveal>
  );
}

export default Hero;