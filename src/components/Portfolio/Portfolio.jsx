import "./Portfolio.css";
import { projectsData } from "../../data/siteData";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">

      <div className="container">

        <div className="section-header">
          <span>Portfolio</span>

          <h2>
            Some Of Our Recent Projects
          </h2>

          <p>
            Delivering innovative solutions across industries
            through technology and creativity.
          </p>
        </div>

        <div className="portfolio-grid">

          {projectsData.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button>
                  View Project →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;