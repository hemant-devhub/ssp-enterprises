import React from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./Footer.css";

const services = [
  "Steel Plants",
  "Sugar Mill",
  "Paper Mill",
  "Power Plant",
  "Refinery",
  "Fabrication",
  "Erection",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "#" },
  { label: "Get Quote", href: "#" },
];

const clients = [
  "JMC Projects (INDIA) Ltd.",
  "B.E.C Ltd.",
  "SEC Pvt. Ltd.",
  "G.D.C.L",
  "C.E.C.C",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    label: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <section className="footer-column footer-company">
              <h2 className="footer-title">SSP Enterprisess</h2>

              <p className="footer-description">
                <strong className="footer-highlight">
                  YOU THINK, WE MAKE
                </strong>
                <br />
                Leading fabrication company providing Steel Plants, Sugar
                Mills, Paper Mills, Power Houses and customized fabrication
                services with excellence.
              </p>

              <div className="footer-socials" aria-label="Social media links">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-link"
                    aria-label={`Visit SSP Enterprisess on ${label}`}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="footer-column">
              <h2 className="footer-title">Our Services</h2>

              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#">{service}</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Links */}
            <section className="footer-column">
              <h2 className="footer-title">Quick Links</h2>

              <ul className="footer-links">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="footer-column">
              <h2 className="footer-title">Contact Info</h2>

              <div className="contact-list">
                <div className="contact-item">
                  <Phone className="contact-icon" size={19} />

                  <div className="contact-content">
                    <a href="tel:+918700849865">+91-8700849865</a>
                    <a href="tel:+917668167061">+91-7668167061</a>
                    // <span className="contact-note">
                    //   Mr. Sohanveer Singh Panchal
                    // </span>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin className="contact-icon" size={19} />

                  <div className="contact-content">
                    <span>
                      Industrial Area,
                      <br />
                      Delhi NCR, India
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock className="contact-icon" size={19} />

                  <div className="contact-content">
                    <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                    <span className="contact-note">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p className="copyright">
            © {currentYear} SSP Enterprises. All rights reserved.
            {/* <span className="copyright-separator">|</span>
            Proprietor: Mr. Sohanveer Singh Panchal */}
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>

            <span className="footer-tagline">
              <strong>Excellence</strong> in Fabrication
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;