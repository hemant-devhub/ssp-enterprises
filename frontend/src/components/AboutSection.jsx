import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const highlights = [
    {
      icon: Factory,
      title: "Industrial Expertise",
      text: "Fabrication and erection solutions across major industrial sectors.",
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      text: "Structured execution with safety and quality at every stage.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      text: "Experienced professionals equipped to handle demanding projects.",
    },
    {
      icon: Award,
      title: "Quality Driven",
      text: "Precision workmanship with a strong focus on reliable results.",
    },
  ];

  const stats = [
    {
      value: "35+",
      label: "Years of Experience",
    },
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "250+",
      label: "Satisfied Clients",
    },
    {
      value: "100%",
      label: "Commitment to Quality",
    },
  ];

  return (
    <section className="about-section">

      {/* Decorative background */}
      <div className="about-background">
        <div className="about-grid" />
        <div className="about-glow about-glow-left" />
        <div className="about-glow about-glow-right" />
      </div>

      <div className="about-container">

        {/* ================= HEADER ================= */}
        <div className="about-heading">

          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            ABOUT SSP ENTERPRISES
            <span className="about-eyebrow-line" />
          </div>

          <div className="about-heading-row">

            <div>
              <h2>
                Engineering Strength
                <span>Built On Experience.</span>
              </h2>
            </div>

            <p>
              We deliver dependable fabrication and erection solutions
              for demanding industrial environments - combining skilled
              workmanship, modern processes and a commitment to safety.
            </p>

          </div>

        </div>

        {/* ================= DIRECTOR MESSAGE ================= */}
        <div className="director-message">

          <div className="director-image-wrapper">
            <img
              src="/sohanveer-singh-panchal.png"
              alt="Sohanveer Singh Panchal - Director, SSP Enterprises"
              className="director-image"
            />
          </div>

          <div className="director-content">

            <div className="director-label">
              <span className="director-label-line" />
              THE VISION BEHIND SSP
              <span className="director-label-line" />
            </div>

            <div className="director-quote">
              <span className="director-quote-mark">“</span>

              <p>
                With more than <strong>35 years of experience</strong> in the
                industrial sector, I have always believed that a successful
                project is built on quality of work, commitment to timelines,
                and trust with the client.
              </p>

              <p>
                At SSP Enterprises, our objective is not simply to complete
                a job, but to become a dependable partner for our clients.
                We believe in delivering work with integrity, maintaining
                high standards of workmanship, and taking responsibility
                for what we commit.
              </p>
            </div>

            <div className="director-footer">

              <div>
                <h3>
                  Sohanveer Singh Panchal
                </h3>

                <span>
                  Director – Projects
                </span>
              </div>

              <div className="director-signature">
                SSP
              </div>

            </div>

          </div>

        </div>

        {/* ================= FOUNDER MESSAGE ================= */}
        <div className="founder-message">

          <div className="founder-content">

            <div className="founder-label">
              <span className="founder-label-line" />
              THE VISION BEHIND SSP
              <span className="founder-label-line" />
            </div>

            <div className="founder-quote">
              <span className="founder-quote-mark">“</span>

              <p>
                With more than <strong>10 years of experience</strong> in 
                mechanical engineering, design, and industrial project work,
                I have developed an understanding of both the, technical and
                practical aspects of industrial requirements.
              </p>

              <p>
                As the Founder of SSP Enterprises, my vision is to build on strong 
                foundation of industrial experience while bringing a new-generation 
                approach to engineering, design, technology, and project execution.
              </p>

              <p>
                Our goal is to combine <strong>experience with innovation, traditional
                workmanship with modern engineering, and practical knowledge with
                technology</strong> to create reliable, long-term value for our clients.
              </p>
            </div>

            <div className="founder-footer">

              <div>
                <h3>
                  Shubham Singh Panchal
                </h3>

                <span>
                  Founder
                </span>
              </div>

              <div className="founder-signature">
                SSP
              </div>

            </div>

          </div>

          <div className="founder-image-wrapper">
            <img
              src="/shubham-singh-panchal.png"
              alt="Shubham Singh Panchal - Founder, SSP Enterprises"
              className="founder-image"
            />
          </div>

        </div>
 
        {/* ================= MAIN STORY ================= */}
        <div className="about-main">

          {/* Image */}
          <div className="about-image-wrapper">

            <div className="about-image-frame">

              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial steel fabrication"
              />

              <div className="about-image-overlay" />

            </div>

            {/* Floating experience */}

            <div className="about-experience">

              <span className="about-experience-number">
                35+
              </span>

              <span className="about-experience-text">
                Years of
                <br />
                Industry Experience
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="about-content">

            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              WHO WE ARE
              <span className="about-eyebrow-line" />
            </span>

            <h3>
              A Fabrication Partner
              <span>You Can Rely On.</span>
            </h3>

            <p>
              SSP Enterprises is an experienced fabrication and erection
              company serving the mechanical and industrial sector.
              Our work spans sugar mills, paper mills, power houses,
              steel plants and a wide range of structural fabrication
              requirements.
            </p>

            <p>
              From initial planning and fabrication to installation and
              final execution, our team focuses on precision,
              reliability and safe project delivery.
            </p>

            {/* Highlights */}

            <div className="about-highlights">

              {highlights.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="about-highlight"
                    key={item.title}
                  >

                    <div className="about-highlight-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Link */}

            <a
              href="/about"
              className="about-link"
            >
              <span>Discover Our Company</span>

              <span className="about-link-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>

          </div>

        </div>

        {/* ================= STATS ================= */}
        <div className="about-stats">

          {stats.map((stat, index) => (

            <div
              className="about-stat"
              key={stat.label}
            >

              <div className="about-stat-value">
                {stat.value}
              </div>

              <div className="about-stat-label">
                {stat.label}
              </div>

            </div>

          ))}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="about-bottom">

          <div className="about-bottom-mark">
            <CheckCircle2 size={20} />
          </div>

          <p>
            From complex industrial structures to complete fabrication
            and erection requirements, we bring the same level of
            discipline, safety and workmanship to every project.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;