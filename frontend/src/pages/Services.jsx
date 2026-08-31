import React from "react";
import {
  ArrowUpRight,
  Building,
  CheckCircle2,
  Factory,
  FileText,
  Layers,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { services } from "../mock/data";
import "./Services.css";

const iconMap = {
  Factory,
  Settings,
  FileText,
  Zap,
  Layers,
  Building,
  Wrench,
};

const Services = () => {

  const serviceIcons = {
    "Steel Plants": Factory,
    "Sugar Mill": Settings,
    "Paper Mill": FileText,
    "Power Plant": Zap,
    "Refinery": Layers,
    Fabrication: Building,
    Erection: Wrench,
  };

  return (
    <div className="services-page">

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-grid" />

        <div className="services-hero-glow services-hero-glow-one" />
        <div className="services-hero-glow services-hero-glow-two" />

        <div className="services-container">

          <div className="services-hero-content">

            <div className="services-eyebrow">
              <span />
              WHAT WE DO
              <span />
            </div>

            <h1>
              Industrial Solutions
              <strong>Built To Perform.</strong>
            </h1>

            <p>
              From industrial fabrication and structural work to
              equipment erection and site execution, SSP Enterprises
              provides practical solutions built around quality,
              safety and dependable project delivery.
            </p>

            <div className="services-hero-meta">

              <div>
                <strong>{services.length}</strong>
                <span>
                  Core
                  <br />
                  Services
                </span>
              </div>

              <div>
                <strong>01</strong>
                <span>
                  Integrated
                  <br />
                  Approach
                </span>
              </div>

              <div>
                <strong>01</strong>
                <span>
                  Dependable
                  <br />
                  Partner
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="services-container">

          <div className="services-intro-layout">

            <div className="services-section-label">
              <span />
              OUR EXPERTISE
              <span />
            </div>

            <div className="services-intro-content">

              <h2>
                One Partner.
                <strong>Multiple Industrial Requirements.</strong>
              </h2>

              <p>
                Industrial projects often require different
                capabilities to work together - fabrication,
                engineering, equipment handling, erection and
                on-site execution.
              </p>

              <p>
                Our service offering is designed to support these
                requirements through a practical and coordinated
                approach, helping clients move from project
                requirements to reliable execution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-list-section">

        <div className="services-container">

          <div className="services-list-heading">

            <div className="services-section-label centered">
              <span />
              OUR SERVICES
              <span />
            </div>

            <h2>
              Industrial Capability
              <strong>That Goes Beyond Fabrication.</strong>
            </h2>

            <p>
              Explore the industrial sectors and project services
              supported by SSP Enterprises.
            </p>

          </div>


          <div className="services-list">

            {services.map((service, index) => {

              const Icon =
                serviceIcons[service.title] ||
                iconMap[service.icon] ||
                Wrench;

              const isReversed = index % 2 === 1;

              return (

                <article
                  className={`service-detail ${
                    isReversed ? "service-detail-reversed" : ""
                  }`}
                  key={service.id}
                >

                  {/* -----------------------------------------
                      IMAGE
                  ----------------------------------------- */}

                  <div className="service-detail-image">

                    <div className="service-image-frame">

                      <img
                        src={service.image}
                        alt={`${service.title} - SSP Enterprises`}
                        loading={index > 1 ? "lazy" : "eager"}
                      />

                      <div className="service-image-overlay" />

                      <div className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                    </div>

                  </div>


                  {/* -----------------------------------------
                      CONTENT
                  ----------------------------------------- */}

                  <div className="service-detail-content">

                    <div className="service-detail-icon">
                      <Icon size={25} />
                    </div>

                    {/* <div className="service-detail-label">
                      <span />
                      SSP ENTERPRISES
                      <span />
                    </div> */}

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    <div className="service-detail-divider" />

                    <div className="service-detail-bottom">

                      <div className="service-detail-check">
                        <CheckCircle2 size={17} />
                        <span>
                          Professional Project Execution
                        </span>
                      </div>

                      <a
                        href={`/contact?service=${encodeURIComponent(
                          service.title
                        )}`}
                        className="service-detail-link"
                      >
                        Discuss This Service
                        <ArrowUpRight size={17} />
                      </a>

                    </div>

                  </div>

                </article>

              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SSP
      ===================================================== */}

      <section className="services-advantage">

        <div className="services-advantage-background">

          <div className="services-advantage-grid" />

          <div className="services-advantage-glow-one" />
          <div className="services-advantage-glow-two" />

        </div>

        <div className="services-container">

          <div className="services-advantage-heading">

            <div className="services-section-label centered light">
              <span />
              THE SSP ADVANTAGE
              <span />
            </div>

            <h2>
              Why Clients Choose
              <strong>Our Approach.</strong>
            </h2>

            <p>
              Every project is different. Our approach remains focused
              on the fundamentals that matter — quality, responsibility,
              safety and dependable execution.
            </p>

          </div>


          <div className="services-advantage-grid-cards">

            <div className="service-advantage-card">

              <div className="service-advantage-icon">
                <ShieldCheck size={25} />
              </div>

              <span className="service-advantage-number">
                01
              </span>

              <h3>
                Safety First
              </h3>

              <p>
                Safety is treated as an essential part of planning,
                fabrication and site execution.
              </p>

            </div>


            <div className="service-advantage-card">

              <div className="service-advantage-icon">
                <CheckCircle2 size={25} />
              </div>

              <span className="service-advantage-number">
                02
              </span>

              <h3>
                Quality Focus
              </h3>

              <p>
                We maintain attention to workmanship, precision and
                project requirements throughout execution.
              </p>

            </div>


            <div className="service-advantage-card">

              <div className="service-advantage-icon">
                <Wrench size={25} />
              </div>

              <span className="service-advantage-number">
                03
              </span>

              <h3>
                Practical Execution
              </h3>

              <p>
                Industrial experience helps us approach challenges
                with practical and site-oriented solutions.
              </p>

            </div>


            <div className="service-advantage-card">

              <div className="service-advantage-icon">
                <Sparkles size={25} />
              </div>

              <span className="service-advantage-number">
                04
              </span>

              <h3>
                Continuous Improvement
              </h3>

              <p>
                We aim to combine established industrial knowledge
                with modern engineering and technology.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="services-process">

        <div className="services-container">

          <div className="services-process-heading">

            <div className="services-section-label">
              <span />
              HOW WE WORK
              <span />
            </div>

            <div className="services-process-heading-row">

              <h2>
                From Requirement
                <strong>To Execution.</strong>
              </h2>

              <p>
                We keep the project approach straightforward -
                understand the requirement, plan the work, execute
                responsibly and deliver with attention to quality.
              </p>

            </div>

          </div>


          <div className="services-process-steps">

            <div className="services-process-step">

              <span>01</span>

              <div>
                <h3>
                  Understand
                </h3>

                <p>
                  Understand the project requirement, specifications,
                  site conditions and expected outcome.
                </p>
              </div>

            </div>


            <div className="services-process-step">

              <span>02</span>

              <div>
                <h3>
                  Plan
                </h3>

                <p>
                  Develop a practical execution approach considering
                  manpower, materials, equipment and site requirements.
                </p>
              </div>

            </div>


            <div className="services-process-step">

              <span>03</span>

              <div>
                <h3>
                  Execute
                </h3>

                <p>
                  Carry out fabrication, erection or related work with
                  focus on workmanship, coordination and safety.
                </p>
              </div>

            </div>


            <div className="services-process-step">

              <span>04</span>

              <div>
                <h3>
                  Deliver
                </h3>

                <p>
                  Complete the work responsibly while maintaining
                  quality and the commitments made to the client.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-final-cta">

        <div className="services-final-cta-pattern" />

        <div className="services-container">

          <div className="services-final-cta-content">

            <div className="services-section-label centered light">
              <span />
              HAVE A PROJECT IN MIND?
              <span />
            </div>

            <h2>
              Let's Build
              <strong> Something That Works.</strong>
            </h2>

            <p>
              Tell us about your industrial fabrication, erection or
              project requirement. Our team can discuss the scope and
              help identify the right approach for your project.
            </p>

            <div className="services-final-actions">

              <a
                href="/quote"
                className="services-cta-primary"
              >
                Request A Quote
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/contact"
                className="services-cta-secondary"
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

export default Services;