import React from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Factory,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Without Compromise",
      text: "We maintain a strong focus on workmanship, precision and reliable execution across every project.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      text: "We believe successful projects are built on trust, transparent communication and lasting relationships.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Responsibility",
      text: "Safety remains an essential part of our planning, fabrication, site execution and project delivery.",
    },
    {
      icon: Target,
      title: "Commitment to Delivery",
      text: "We take responsibility for our commitments and work toward dependable and timely project execution.",
    },
  ];

  const capabilities = [
    {
      icon: Factory,
      number: "01",
      title: "Industrial Fabrication",
      text: "Heavy and structural fabrication solutions for demanding industrial environments and applications.",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Erection & Installation",
      text: "Professional site erection and installation carried out with attention to safety, accuracy and specifications.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Engineering Approach",
      text: "Practical engineering and project thinking that connects design requirements with real site conditions.",
    },
    {
      icon: Users,
      number: "04",
      title: "Experienced Team",
      text: "A skilled workforce supported by practical industrial experience and a strong commitment to quality.",
    },
  ];

  return (
    <div className="about-page">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-page-hero">

        <div className="about-page-hero-grid" />

        <div className="about-page-hero-glow about-page-hero-glow-left" />
        <div className="about-page-hero-glow about-page-hero-glow-right" />

        <div className="about-page-container">

          <div className="about-page-hero-content">

            <div className="about-page-eyebrow">
              <span />
              ABOUT SSP ENTERPRISES
              <span />
            </div>

            <h1>
              Built On Experience.
              <strong>Driven By What Comes Next.</strong>
            </h1>

            <p>
              SSP Enterprises brings together decades of industrial
              experience, skilled fabrication, practical engineering and
              a new-generation approach to project execution.
            </p>

            <div className="about-page-hero-actions">

              <a href="/contact" className="about-primary-btn">
                Start A Conversation
                <ArrowUpRight size={18} />
              </a>

              <a href="#leadership" className="about-secondary-btn">
                Meet Our Leadership
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <section className="company-story">

        <div className="about-page-container">

          <div className="company-story-layout">

            <div className="company-story-image">

              <div className="company-story-image-frame">

                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
                  alt="Industrial steel fabrication at SSP Enterprises"
                />

                <div className="company-story-image-overlay" />

              </div>

              <div className="company-story-badge">
                <span className="company-story-badge-number">
                  35+
                </span>

                <span>
                  Years of
                  <br />
                  Industrial Experience
                </span>
              </div>

            </div>


            <div className="company-story-content">

              <div className="section-eyebrow">
                <span />
                WHO WE ARE
                <span />
              </div>

              <h2>
                Experience That
                <strong>Works In The Real World.</strong>
              </h2>

              <p>
                SSP Enterprises is an industrial fabrication and erection
                company built around practical experience, skilled
                workmanship and a strong understanding of demanding
                industrial environments.
              </p>

              <p>
                Our experience covers a wide range of industrial
                requirements including sugar mills, paper mills, power
                houses, steel plants, refineries and structural
                fabrication projects.
              </p>

              <p>
                From fabrication and site preparation to erection,
                installation and final execution, we approach every
                project with attention to detail, safety and dependable
                workmanship.
              </p>

              <div className="company-story-points">

                <div>
                  <CheckCircle2 size={18} />
                  <span>Practical Industrial Experience</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Quality-Focused Execution</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Safety-Oriented Approach</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Long-Term Client Relationships</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section
        className="leadership-section"
        id="leadership"
      >

        <div className="about-page-background">
          <div className="about-page-grid" />
          <div className="about-page-glow about-page-glow-one" />
          <div className="about-page-glow about-page-glow-two" />
        </div>

        <div className="about-page-container">

          <div className="leadership-heading">

            <div className="section-eyebrow centered">
              <span />
              LEADERSHIP
              <span />
            </div>

            <h2>
              Experience At The Core.
              <strong>Vision For The Future.</strong>
            </h2>

            <p>
              SSP Enterprises is shaped by two generations of industrial
              experience, combining established knowledge with a
              forward-looking approach to engineering and business.
            </p>

          </div>


          {/* =================================================
              DIRECTOR
          ================================================= */}

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
                LEADERSHIP & EXPERIENCE
                <span className="director-label-line" />
              </div>

              <h3 className="leadership-person-title">
                A Foundation Built Through
                <strong>Decades Of Experience.</strong>
              </h3>

              <div className="director-quote">

                <span className="director-quote-mark">
                  “
                </span>

                <p>
                  With more than <strong>35 years of experience</strong>{" "}
                  in the industrial sector, I have always believed that
                  a successful project is built on three things -
                  <strong>
                    {" "}quality of work, commitment to timelines, and
                    trust with the client.
                  </strong>
                </p>

                <p>
                  Over the years, working across sugar mills, paper
                  mills, power houses, steel plants, refineries, and
                  other industrial projects has given me a strong
                  understanding of the challenges involved in
                  fabrication and erection. This experience has taught
                  me that every project demands responsibility,
                  precision, teamwork, and the ability to find
                  practical solutions on site.
                </p>

                <p>
                  At SSP Enterprises, our objective is not simply to
                  complete a job, but to become a dependable partner
                  for our clients. We believe in delivering work with
                  integrity, maintaining high standards of workmanship,
                  and taking responsibility for what we commit.
                </p>

                <p>
                  I see SSP Enterprises as the continuation of the
                  values and experience built over my professional
                  journey, while also creating a strong foundation for
                  the next generation to take the company forward with
                  modern engineering practices, technology, and new
                  ideas.
                </p>

                <p>
                  Our commitment remains simple -
                  <strong>
                    {" "}do the work right, stand behind our commitment,
                    and build relationships that last.
                  </strong>
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


          {/* =================================================
              FOUNDER
          ================================================= */}

          <div className="founder-message">

            <div className="founder-content">

              <div className="founder-label">
                <span className="founder-label-line" />
                NEXT-GENERATION VISION
                <span className="founder-label-line" />
              </div>

              <h3 className="leadership-person-title">
                Building On Experience.
                <strong>Moving Engineering Forward.</strong>
              </h3>

              <div className="founder-quote">

                <span className="founder-quote-mark">
                  “
                </span>

                <p>
                  With over <strong>10 years of experience</strong> in
                  mechanical engineering, design, and industrial
                  project work, my journey has given me the opportunity
                  to understand both the technical and practical sides
                  of industrial requirements.
                </p>

                <p>
                  Growing up around the industrial sector and learning
                  from more than three decades of my father’s
                  experience has shaped the way I look at engineering
                  and business. I believe that good industrial
                  solutions require more than technical knowledge -
                  they require practical thinking, attention to detail,
                  responsible execution, and a clear understanding of
                  the client’s requirements.
                </p>

                <p>
                  As the Founder of SSP Enterprises, my vision is to
                  build on the strong foundation created through years
                  of industrial experience while bringing a
                  new-generation approach to engineering, design,
                  technology, and project execution.
                </p>

                <p>
                  My goal is to develop SSP Enterprises into a trusted
                  and capable industrial partner that combines
                  <strong>
                    {" "}experience with innovation, traditional
                    workmanship with modern engineering, and practical
                    knowledge with technology.
                  </strong>
                </p>

                <p>
                  We are committed to continuously improving our
                  capabilities, taking on new challenges, and creating
                  long-term value for our clients through quality,
                  reliability, and professional execution.
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

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="values-section">

        <div className="about-page-container">

          <div className="values-heading">

            <div className="section-eyebrow centered">
              <span />
              WHAT GUIDES US
              <span />
            </div>

            <h2>
              Principles Behind
              <strong>Every Project.</strong>
            </h2>

            <p>
              Our approach is grounded in a few principles that remain
              consistent regardless of project size or complexity.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  className="value-card"
                  key={value.title}
                >

                  <div className="value-icon">
                    <Icon size={24} />
                  </div>

                  <span className="value-line" />

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities-section">

        <div className="about-page-container">

          <div className="capabilities-heading">

            <div className="capabilities-eyebrow section-eyebrow">
              <span />
              OUR CAPABILITIES
              <span />
            </div>

            <div className="capabilities-heading-row">

              <h2>
                From Workshop
                <strong>To Site.</strong>
              </h2>

              <p>
                Our capabilities bring together fabrication,
                engineering, skilled manpower and site execution
                to support industrial projects from requirement
                through completion.
              </p>

            </div>

          </div>


          <div className="capabilities-grid">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="capability-card"
                  key={item.number}
                >

                  <div className="capability-top">

                    <span>
                      {item.number}
                    </span>

                    <div className="capability-icon">
                      <Icon size={22} />
                    </div>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="capability-arrow">
                    <ArrowUpRight size={17} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">

        <div className="about-final-cta-pattern" />

        <div className="about-page-container">

          <div className="about-final-cta-content">

            <div className="section-eyebrow centered light">
              <span />
              LET'S BUILD TOGETHER
              <span />
            </div>

            <h2>
              Experience The SSP
              <strong> Difference.</strong>
            </h2>

            <p>
              Have an industrial fabrication, erection or structural
              requirement? Let's discuss your project and explore how
              SSP Enterprises can support you.
            </p>

            <div className="about-final-cta-actions">

              <a
                href="/quote"
                className="about-cta-primary"
              >
                Request A Quote
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/contact"
                className="about-cta-secondary"
              >
                Contact Our Team
              </a>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default About;