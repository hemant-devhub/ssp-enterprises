import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Replace with your API/form submission logic
  };

  return (
    <section className="contact-section">

      {/* Background */}

      <div className="contact-background">
        <div className="contact-grid" />
        <div className="contact-glow contact-glow-left" />
        <div className="contact-glow contact-glow-right" />
      </div>

      <div className="contact-container">

        {/* ================= HEADER ================= */}

        <div className="contact-heading">

          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            START A CONVERSATION
            <span className="contact-eyebrow-line" />
          </div>

          <div className="contact-heading-row">

            <h2>
              Let's Build
              <span>Something Solid.</span>
            </h2>

            <p>
              Tell us about your fabrication, erection or industrial
              engineering requirements. Our team will get back to you
              with the right approach for your project.
            </p>

          </div>

        </div>

        {/* ================= MAIN ================= */}

        <div className="contact-main">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <div className="contact-info-top">

              <span className="contact-info-label">
                SSP ENTERPRISES
              </span>

              <h3>
                Engineering
                <span>you can depend on.</span>
              </h3>

              <p>
                From structural fabrication to complete industrial
                erection, we're ready to understand your requirements
                and help turn them into a practical execution plan.
              </p>

            </div>

            {/* Contact Details */}

            <div className="contact-details">

              <a
                href="tel:+918700849865"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>CALL US</span>
                  <strong>+91 8700849865</strong>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={18}
                />

              </a>

              <a
                href="tel:+917668167061"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>ALTERNATE NUMBER</span>
                  <strong>+91 7668167061</strong>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={18}
                />

              </a>

              <a
                href="mailto:info@sspfabricators.com"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>info@ssp-enterprises.com</strong>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={18}
                />

              </a>

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Delhi, India</strong>
                </div>

              </div>

            </div>

            {/* Promise */}

            <div className="contact-promise">

              <CheckCircle2 size={19} />

              <p>
                We aim to respond to project enquiries promptly
                and understand your requirements before proposing
                the right solution.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <div>
                <span>PROJECT ENQUIRY</span>

                <h3>
                  Tell us about your project
                </h3>
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Name + Company */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* Phone + Email */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* Service */}

              <div className="contact-field">

                <label htmlFor="service">
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="steel-plants">
                    Steel Plants
                  </option>

                  <option value="sugar-mill">
                    Sugar Mill
                  </option>

                  <option value="paper-mill">
                    Paper Mill
                  </option>

                  <option value="power-house">
                    Power House
                  </option>

                  <option value="structural-fabrication">
                    Structural Fabrication
                  </option>

                  <option value="customized-fabrication">
                    Customized Fabrication
                  </option>

                </select>

              </div>

              {/* Message */}

              <div className="contact-field">

                <label htmlFor="message">
                  Project Requirements
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us briefly about your project, location, scope or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  Send Project Enquiry
                </span>

                <span className="contact-submit-icon">
                  <Send size={18} />
                </span>

              </button>

              <p className="contact-form-note">
                By submitting this form, you agree to be contacted
                regarding your project enquiry.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;