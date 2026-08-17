import { Button } from "./ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Building2,
  Factory,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Grid Background */}
      <div className="hero-grid-background" aria-hidden="true">
        <div className="hero-grid" />
      </div>

      {/* Glow Effects */}
      <div className="hero-glow-orange" aria-hidden="true" />
      <div className="hero-glow-blue" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-main-grid">
          {/* Left */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              Excellence In Fabrication &amp; Erection
            </div>

            <h1 className="hero-title">
              BUILDING INDIA&apos;S
              <span className="hero-title-accent">
                INDUSTRIAL FUTURE
              </span>
            </h1>

            <p className="hero-description">
              SSP Enterprises delivers premium fabrication,
              erection and industrial engineering solutions
              for Steel Plants, Sugar Mills, Paper Mills,
              Power Houses and heavy industrial projects.
            </p>

            <div className="hero-actions">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="hero-button hero-button-primary"
              >
                Get Free Quote
                <ArrowRight />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="hero-button hero-button-secondary"
              >
                <Play />
                View Projects
              </Button>
            </div>

            {/* Features */}
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle2 className="hero-feature-icon" />
                <span className="hero-feature-text">Certified Team</span>
              </div>

              <div className="hero-feature">
                <CheckCircle2 className="hero-feature-icon" />
                <span className="hero-feature-text">On-Time Delivery</span>
              </div>

              <div className="hero-feature">
                <CheckCircle2 className="hero-feature-icon" />
                <span className="hero-feature-text">Industrial Expertise</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-image-wrapper">
              <img
                src="/project1.jpg"
                alt="Industrial Fabrication"
                className="hero-image"
              />
            </div>

            {/* Stats Cards */}
            <div className="hero-stat hero-stat-left">
              <h3 className="hero-stat-number">250+</h3>
              <p className="hero-stat-label">Projects Delivered</p>
            </div>

            <div className="hero-stat hero-stat-right">
              <h3 className="hero-stat-number">100%</h3>
              <p className="hero-stat-label">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="hero-bottom-cards">
          <div className="hero-bottom-card">
            <Factory className="hero-bottom-card-icon" />

            <h3 className="hero-bottom-card-title">
              Steel Plants
            </h3>

            <p className="hero-bottom-card-text">
              Complete fabrication and erection solutions.
            </p>
          </div>

          <div className="hero-bottom-card">
            <Building2 className="hero-bottom-card-icon" />

            <h3 className="hero-bottom-card-title">
              Industrial Projects
            </h3>

            <p className="hero-bottom-card-text">
              Customized heavy engineering structures.
            </p>
          </div>

          <div className="hero-bottom-card">
            <ShieldCheck className="hero-bottom-card-icon" />

            <h3 className="hero-bottom-card-title">
              Quality Assurance
            </h3>

            <p className="hero-bottom-card-text">
              Strict quality and safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;