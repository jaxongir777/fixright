import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className="footer" id="booking">
      <div className="container">
        <div className="footer-container">

          <div className="footer-content">
            <span className="footer-label">
              <span className="footer-label-dot"></span>
              LET'S GET IT FIXED
            </span>

            <h2>
              Ready when <br />
              <span>you are.</span>
            </h2>

            <p>
              Got a repair on your list? Let's get it taken care of.
              Pick a time that works for you and I'll handle the rest.
            </p>

            <div className="footer-buttons">
              <a href="#booking-form" className="footer-btn-primary">
                Book a repair
                <span>↗</span>
              </a>

              <a href="#services" className="footer-btn-secondary">
                Explore services
                <span>→</span>
              </a>
            </div>

            <div className="footer-trust">
              <span className="footer-check">✓</span>
              <span>Simple booking</span>

              <span className="footer-trust-divider"></span>

              <span className="footer-check">✓</span>
              <span>Reliable service</span>
            </div>
          </div>

          <div className="footer-visual">
            <div className="footer-circle footer-circle-one"></div>
            <div className="footer-circle footer-circle-two"></div>

            <div className="footer-tool-card">
              <div className="footer-tool-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18a2.1 2.1 0 0 0 3 3l5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3z" />
                </svg>
              </div>

              <span className="footer-tool-small">
                YOUR LOCAL HANDYMAN
              </span>

              <h3>Small fixes.</h3>
              <h3 className="footer-green-text">Big relief.</h3>

              <p>Let's make your home work better for you.</p>

              <div className="footer-card-line">
                <span></span>
                Ready to help
              </div>
            </div>

            <div className="footer-floating-badge">
              <span>✓</span>
              One less thing to worry about
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer