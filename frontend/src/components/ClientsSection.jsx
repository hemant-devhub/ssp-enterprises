import React from "react";
import { ArrowUpRight, Building2 } from "lucide-react";
import "./ClientsSection.css";

const clients = [
  "G.D.C.L",
  "C.E.C.C",
  "Industrial Partners",
  "Engineering Partners",
  "Manufacturing Partners",
  "Infrastructure Partners",
];

const ClientsSection = () => {
  return (
    <section className="clients-section">

      <div className="clients-container">

        {/* ================= TOP ================= */}

        <div className="clients-top">

          <div className="clients-eyebrow">
            <span className="clients-eyebrow-line" />
            OUR NETWORK
            <span className="clients-eyebrow-line" />
          </div>

          <div className="clients-heading-row">

            <div>
              <h2>
                Trusted relationships.
                <span>Long-term partnerships.</span>
              </h2>
            </div>

            <p>
              We believe great industrial projects are built through
              strong collaboration. Our approach is focused on
              dependable communication, consistent quality and
              relationships that continue beyond project completion.
            </p>

          </div>

        </div>

        {/* ================= CLIENT LOGOS / NAMES ================= */}

        <div className="clients-showcase">

          <div className="clients-showcase-label">
            <span>WORKING WITH</span>
            <span className="clients-showcase-line" />
          </div>

          <div className="clients-grid">

            {clients.map((client, index) => (

              <div
                className="client-item"
                key={client}
              >

                <div className="client-icon">
                  <Building2 size={20} />
                </div>

                <div className="client-name">
                  {client}
                </div>

                <span className="client-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ================= TRUST MESSAGE ================= */}

        {/* <div className="clients-bottom">

          <div className="clients-bottom-mark">
            <Building2 size={21} />
          </div>

          <div className="clients-bottom-content">

            <span>
              BUILT THROUGH COLLABORATION
            </span>

            <h3>
              Your requirements.
              <strong> Our responsibility.</strong>
            </h3>

            <p>
              Whether you need structural fabrication, industrial
              erection or a complete fabrication solution, our team
              is ready to work alongside yours.
            </p>

          </div>

          <a
            href="/contact"
            className="clients-button"
          >
            <span>Work With Us</span>
            <ArrowUpRight size={18} />
          </a>

        </div> */}

      </div>

    </section>
  );
};

export default ClientsSection;