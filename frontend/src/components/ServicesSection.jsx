import React, { useState } from "react";
import {
  ArrowUpRight,
  Factory,
  Settings,
  Zap,
  Layers3,
  Wrench,
  FileText,
} from "lucide-react";
import { services } from "../mock/data";
import "./ServicesSection.css";

const iconMap = {
  Factory,
  Settings,
  FileText,
  Zap,
  Layers: Layers3,
  Wrench,
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const active = services?.[activeService] || services?.[0];

  if (!services?.length) {
    return null;
  }

  return (
    <section className="services-section">

      {/* Background */}

      <div className="services-background">
        <div className="services-grid" />
        <div className="services-glow services-glow-left" />
        <div className="services-glow services-glow-right" />
      </div>

      <div className="services-container">

        {/* ================= HEADER ================= */}

        <div className="services-heading">

          <div className="services-eyebrow">
            <span className="services-eyebrow-line" />
            OUR CAPABILITIES
          </div>

          <div className="services-heading-row">

            <h2>
              Built for demanding
              <span>industrial environments.</span>
            </h2>

            <p>
              From structural fabrication to complete industrial
              erection, we provide practical engineering solutions
              designed around quality, safety and reliable execution.
            </p>

          </div>

        </div>

        {/* ================= SERVICE EXPLORER ================= */}

        <div className="services-explorer">

          {/* Service List */}

          <div className="services-list">

            {services.map((service, index) => {

              const Icon = iconMap[service.icon] || Factory;

              const isActive = activeService === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  className={`service-item ${
                    isActive ? "service-item-active" : ""
                  }`}
                  onClick={() => setActiveService(index)}
                >

                  <div className="service-item-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="service-item-icon">
                    <Icon size={20} />
                  </div>

                  <div className="service-item-content">
                    <span>{service.title}</span>
                  </div>

                  <ArrowUpRight
                    className="service-item-arrow"
                    size={20}
                  />

                </button>
              );
            })}

          </div>

          {/* Featured Service */}

          <div className="services-featured">

            <div className="services-featured-image">

              <img
                src={active.image}
                alt={active.title}
              />

              <div className="services-featured-overlay" />

              <div className="services-featured-label">
                <span>01</span>
                FEATURED CAPABILITY
              </div>

              <div className="services-featured-title">
                {active.title}
              </div>

            </div>

            <div className="services-featured-content">

              <div>

                <span className="services-content-label">
                  {active.type || "INDUSTRIAL SOLUTIONS"}
                </span>

                <h3>
                  {active.title}
                </h3>

                <p>
                  {active.description}
                </p>

              </div>

              <a
                href={
                  active.title === "Steel Plants"
                    ? "/steel-plants"
                    : "/services"
                }
                className="services-learn-more"
              >

                <span>Explore Service</span>

                <span className="services-learn-more-icon">
                  <ArrowUpRight size={18} />
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* ================= PROCESS ================= */}

        <div className="services-process">

          <div className="services-process-heading">

            <span className="services-eyebrow">
              <span className="services-eyebrow-line" />
              HOW WE WORK
            </span>

            <h3>
              From drawing board
              <span>to final installation.</span>
            </h3>

          </div>

          <div className="services-process-list">

            <div className="services-process-item">

              <span className="services-process-number">
                01
              </span>

              <div>
                <h4>Plan</h4>

                <p>
                  Understand requirements, drawings,
                  specifications and site conditions.
                </p>
              </div>

            </div>

            <div className="services-process-item">

              <span className="services-process-number">
                02
              </span>

              <div>
                <h4>Fabricate</h4>

                <p>
                  Manufacture structural components
                  with controlled precision and quality.
                </p>
              </div>

            </div>

            <div className="services-process-item">

              <span className="services-process-number">
                03
              </span>

              <div>
                <h4>Erect</h4>

                <p>
                  Execute installation safely and
                  efficiently at the project site.
                </p>
              </div>

            </div>

            <div className="services-process-item">

              <span className="services-process-number">
                04
              </span>

              <div>
                <h4>Deliver</h4>

                <p>
                  Complete testing, finishing and
                  project handover with confidence.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="services-bottom">

          <div>

            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's discuss what
              <strong> we can build together.</strong>
            </h3>

          </div>

          <a
            href="/contact"
            className="services-bottom-button"
          >

            <span>Talk to Our Team</span>

            <ArrowUpRight size={19} />

          </a>

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;