import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { testimonials } from "../mock/data";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const activeTestimonial = testimonials?.[current];

  useEffect(() => {
    if (!testimonials?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!testimonials?.length) {
    return null;
  }

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials-section">

      {/* ================= BACKGROUND ================= */}

      <div className="testimonials-background">
        <div className="testimonials-grid" />
        <div className="testimonials-glow" />
      </div>

      <div className="testimonials-container">

        {/* ================= HEADER ================= */}

        <div className="testimonials-heading">

          <div className="testimonials-eyebrow">
            <span className="testimonials-eyebrow-line" />
            CLIENT EXPERIENCE
            <span className="testimonials-eyebrow-line" />
          </div>

          <div className="testimonials-heading-row">

            <h2>
              Trusted by teams
              <span>that demand more.</span>
            </h2>

            <p>
              Strong partnerships are built through consistent
              communication, dependable execution and quality
              work delivered when it matters.
            </p>

          </div>

        </div>

        {/* ================= MAIN TESTIMONIAL ================= */}

        <div className="testimonials-main">

          {/* Quote side */}

          <div className="testimonial-featured">

            <div className="testimonial-quote-icon">
              <Quote size={30} />
            </div>

            <div className="testimonial-stars">

              {[...Array(activeTestimonial.rating || 5)].map(
                (_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                  />
                )
              )}

            </div>

            <blockquote>
              “{activeTestimonial.content}”
            </blockquote>

            <div className="testimonial-author">

              <div className="testimonial-avatar">
                {activeTestimonial.name?.charAt(0)}
              </div>

              <div>
                <h3>
                  {activeTestimonial.name}
                </h3>

                <p>
                  {activeTestimonial.designation}
                </p>

                <span>
                  {activeTestimonial.company}
                </span>
              </div>

            </div>

            {/* Controls */}

            <div className="testimonial-controls">

              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="testimonial-dots">

                {testimonials.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    className={
                      current === index
                        ? "testimonial-dot testimonial-dot-active"
                        : "testimonial-dot"
                    }
                  />

                ))}

              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

          {/* Visual side */}

          <div className="testimonial-visual">

            <div className="testimonial-visual-content">

              <span>
                OUR CLIENTS
              </span>

              <h3>
                Built on
                <strong> trust.</strong>
              </h3>

              <p>
                Every successful project begins with a strong
                relationship. We work closely with our clients
                from planning through execution.
              </p>

            </div>

            <div className="testimonial-visual-mark">
              <Quote size={70} />
            </div>

          </div>

        </div>

        {/* ================= TESTIMONIAL STRIP ================= */}

        {testimonials.length > 1 && (

          <div className="testimonial-strip">

            {testimonials.map((testimonial, index) => (

              <button
                type="button"
                key={testimonial.id}
                className={`testimonial-mini ${
                  current === index
                    ? "testimonial-mini-active"
                    : ""
                }`}
                onClick={() => setCurrent(index)}
              >

                <div className="testimonial-mini-avatar">
                  {testimonial.name?.charAt(0)}
                </div>

                <div className="testimonial-mini-info">

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.company}
                  </span>

                </div>

              </button>

            ))}

          </div>

        )}

        {/* ================= BOTTOM MESSAGE ================= */}

        {/* <div className="testimonials-bottom">

          <div>

            <span>
              YOUR PROJECT COULD BE NEXT
            </span>

            <h3>
              Let's build a relationship
              <strong> that lasts.</strong>
            </h3>

          </div>

          <a
            href="/contact"
            className="testimonials-button"
          >
            <span>Start a Conversation</span>

            <ArrowRight size={18} />
          </a>

        </div> */}

      </div>

    </section>
  );
};

export default TestimonialsSection;