import React from 'react'
import './hero.css'
import Santexnik from './santexnik.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">

          {/* HERO CONTENT */}
          <div className="hero-content">

            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Your local handyman in Phoenix
            </div>

            <h1 className="hero-title">
              Home repairs,
              <br />
              <span>booked in</span>
              <br />
              <span className="hero-title-accent">
                two minutes.
              </span>
            </h1>

            <p className="hero-description">
              I'm Ray — one handyman, one truck, no call centre.
              Describe the problem, send a photo, and choose an
              arrival window. You'll have a confirmed appointment
              before we ever speak on the phone.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="hero-btn-primary">
                <span>Book a repair</span>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#owner" className="hero-btn-secondary">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M9 4v16M3 10h6M3 15h6" />
                </svg>

                <span>See the owner dashboard</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div>
                <h3>Simple. Reliable. Local.</h3>
                <p>Repairs made easier, from start to finish.</p>
              </div>
            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="hero-image-box">
            <div className="hero-image-glow"></div>

            <img
              className="hero-image"
              src={Santexnik}
              alt="Professional handyman helping with home repairs"
            />

            <div className="hero-image-label">
              <div className="hero-label-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <span className="hero-label-title">
                  Proudly serving
                </span>
                <p className="hero-label-location">
                  Phoenix, Arizona
                </p>
              </div>
            </div>

            <div className="hero-image-number">
              <span>01</span>
              <div></div>
              <span>HOME REPAIR</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero