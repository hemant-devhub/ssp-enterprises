import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { projects } from "../mock/data";
import "./ProjectsSection.css";

const categories = [
  "Show All",
  "Steel plants",
  "Sugar Mill",
  "Paper Mill",
  "Power House",
  "Structural fabrication",
  "Customized Fabrication",
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Show All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const featuredProject =
    filteredProjects?.[featuredIndex] || filteredProjects?.[0];

  const nextProject = () => {
    if (!filteredProjects?.length) return;

    setFeaturedIndex((current) =>
      current === filteredProjects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    if (!filteredProjects?.length) return;

    setFeaturedIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1
    );
  };

  const changeFilter = (category) => {
    setActiveFilter(category);
    setFeaturedIndex(0);
  };

  if (!projects?.length) {
    return null;
  }

  return (
    <section className="projects-section">

      {/* ================= BACKGROUND ================= */}

      <div className="projects-background">
        <div className="projects-grid" />
        <div className="projects-glow projects-glow-left" />
        <div className="projects-glow projects-glow-right" />
      </div>

      <div className="projects-container">

        {/* ================= HEADER ================= */}

        <div className="projects-heading">

          <div className="projects-eyebrow">
            <span className="projects-eyebrow-line" />
            SELECTED PROJECTS
            <span className="projects-eyebrow-line" />
          </div>

          <div className="projects-heading-row">

            <h2>
              Work that speaks
              <span>for itself.</span>
            </h2>

            <p>
              A selection of fabrication and erection projects
              delivered across industrial environments with
              precision, safety and dependable execution.
            </p>

          </div>

        </div>

        {/* ================= FILTERS ================= */}

        <div className="projects-filters">

          <div className="projects-filter-scroll">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={`projects-filter ${
                  activeFilter === category
                    ? "projects-filter-active"
                    : ""
                }`}
                onClick={() => changeFilter(category)}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* ================= FEATURED PROJECT ================= */}

        {featuredProject && (

          <div className="projects-featured">

            <div className="projects-featured-image">

              <img
                key={featuredProject.id}
                src={featuredProject.image}
                alt={featuredProject.title}
              />

              <div className="projects-featured-overlay" />

              <div className="projects-featured-category">
                {featuredProject.category}
              </div>

              <div className="projects-featured-counter">

                <span>
                  {String(featuredIndex + 1).padStart(2, "0")}
                </span>

                <span>/</span>

                <span>
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>

              </div>

            </div>

            <div className="projects-featured-content">

              <div className="projects-featured-meta">

                <span>
                  {featuredProject.type}
                </span>

                {featuredProject.client && (
                  <>
                    <span className="projects-meta-dot" />
                    <span>
                      {featuredProject.client}
                    </span>
                  </>
                )}

              </div>

              <h3>
                {featuredProject.title}
              </h3>

              <p>
                A professionally executed industrial fabrication
                and erection project delivered with a strong focus
                on structural precision, quality and site safety.
              </p>

              <div className="projects-featured-actions">

                <a
                  href="/contact"
                  className="projects-primary-button"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight size={18} />
                </a>

                <div className="projects-slider-controls">

                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={previousProject}
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={nextProject}
                  >
                    <ChevronRight size={19} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

        {/* ================= PROJECT LIST ================= */}

        <div className="projects-list-header">

          <div>
            <span>
              PROJECT PORTFOLIO
            </span>

            <h3>
              More of our work
            </h3>
          </div>

          <p>
            Explore projects across our major
            industrial capabilities.
          </p>

        </div>

        <div className="projects-grid-list">

          {filteredProjects.map((project, index) => (

            <article
              key={project.id}
              className={`project-card ${
                featuredProject?.id === project.id
                  ? "project-card-active"
                  : ""
              }`}
              onClick={() => setFeaturedIndex(index)}
            >

              <div className="project-card-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-card-overlay" />

                <span className="project-card-category">
                  {project.category}
                </span>

                <span className="project-card-arrow">
                  <ArrowUpRight size={18} />
                </span>

              </div>

              <div className="project-card-content">

                <div className="project-card-type">
                  {project.type}
                </div>

                <h4>
                  {project.title}
                </h4>

                <div className="project-card-location">

                  <MapPin size={14} />

                  <span>
                    {project.client || "Industrial Project"}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        {/* <div className="projects-bottom">

          <div>

            <span>
              HAVE AN INDUSTRIAL PROJECT?
            </span>

            <h3>
              Tell us what you need.
              <strong> We'll help build it.</strong>
            </h3>

          </div>

          <a
            href="/quote"
            className="projects-bottom-button"
          >

            <span>Request a Quote</span>

            <ArrowUpRight size={19} />

          </a>

        </div> */}

      </div>

    </section>
  );
};

export default ProjectsSection;