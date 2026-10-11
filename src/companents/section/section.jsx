import React from 'react'
import './section.css'

const Section = () => {
  return (
    <section className="how-section">
      <div className="container">
        <div className="section-container">

          {/* SECTION HEADING */}
          <div className="how-heading">
            <span className="how-eyebrow">
              <span className="how-eyebrow-dot"></span>
              SIMPLE PROCESS
            </span>

            <h2 className="how-title">
              How it <span>works.</span>
            </h2>

            <p className="how-description">
              Getting your home fixed shouldn't be complicated.
              Three simple steps and you're all set.
            </p>
          </div>

          {/* STEPS */}
          <div className="how-grid">

            {/* STEP 01 */}
            <article className="how-card">
              <div className="how-card-top">
                <span className="how-number">01</span>

                <div className="how-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H7l-4 2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </div>
              </div>

              <h3>Tell me what needs fixing</h3>

              <p>
                Describe the problem, choose a repair category,
                and upload a photo if you can. I'll have a
                clearer idea of what needs to be done.
              </p>

              <div className="how-card-footer">
                <span className="how-check">
                  <svg viewBox="0 0 24 24" width="15" height="15"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>Quick and easy request</span>
              </div>
            </article>

            {/* STEP 02 */}
            <article className="how-card how-card-featured">
              <div className="how-card-top">
                <span className="how-number">02</span>

                <div className="how-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
              </div>

              <h3>Choose a time that works</h3>

              <p>
                Enter your address and pick an available arrival
                window that fits your schedule. No endless phone
                calls or back-and-forth messages.
              </p>

              <div className="how-card-footer">
                <span className="how-check">
                  <svg viewBox="0 0 24 24" width="15" height="15"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>Pick your preferred time</span>
              </div>
            </article>

            {/* STEP 03 */}
            <article className="how-card">
              <div className="how-card-top">
                <span className="how-number">03</span>

                <div className="how-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="m8 14 2.5 2.5L16 11" />
                  </svg>
                </div>
              </div>

              <h3>You're booked. That's it.</h3>

              <p>
                Review your details and submit your request.
                Once your appointment is confirmed, you're ready
                for a simpler, stress-free repair.
              </p>

              <div className="how-card-footer">
                <span className="how-check">
                  <svg viewBox="0 0 24 24" width="15" height="15"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <span>Confirmation and peace of mind</span>
              </div>
            </article>

          </div>

          {/* BOTTOM CTA */}
          <div className="how-bottom">
            <div className="how-bottom-content">
              <div className="how-bottom-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-6.4 6.4a2.1 2.1 0 0 1-3-3l6.4-6.4a6 6 0 0 1 7.9-7.9z" />
                </svg>
              </div>

              <div>
                <h3>Ready to get that repair taken care of?</h3>
                <p>Let's get your home back in working order.</p>
              </div>
            </div>

            <a href="#booking" className="how-bottom-btn">
              Book your repair
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section