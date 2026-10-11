import React from 'react'
import './main.css'

const Main = () => {
  const services = [
    {
      number: '01',
      title: 'Plumbing',
      description:
        'Leaky faucets, running toilets, clogged drains, and everyday plumbing fixes.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M8 2v4M16 2v4M5 6h14v4a7 7 0 0 1-14 0V6Z" />
          <path d="M12 17v5M9 22h6M8 10h.01M16 10h.01" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Electrical',
      description:
        'Light fixtures, switches, outlets, and small electrical repairs around your home.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Drywall & Paint',
      description:
        'Patch holes, repair wall damage, touch up paint, and keep your walls looking fresh.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 3h18v10H3z" />
          <path d="M7 13v8M17 13v8M5 21h4M15 21h4" />
          <path d="M7 7h10" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Doors & Hardware',
      description:
        'Fix sticking doors, replace handles, adjust hinges, and repair locks and latches.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 21V3h14v18" />
          <path d="M9 21V7l6-2v16" />
          <circle cx="12" cy="14" r=".8" />
          <path d="M3 21h18" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Furniture Assembly',
      description:
        'Get shelves, desks, beds, cabinets, and flat-pack furniture assembled properly.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 10h16v5H4zM6 15v6M18 15v6" />
          <path d="M6 10V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
          <path d="M8 7h8" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'General Repairs',
      description:
        'Loose fixtures, shelves, small installations, and those little jobs on your to-do list.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="m14.7 6.3 3 3M3 21l7.5-7.5" />
          <path d="M14.7 6.3a6 6 0 0 0 7.1 7.1l-4.1 4.1-7.1-7.1 4.1-4.1Z" />
          <path d="m9 14-5 5a2.1 2.1 0 0 0 3 3l5-5" />
        </svg>
      ),
    },
  ]

  return (
    <main className="fix-main">
      <div className="container">
        <div className="main-container">

          {/* HEADING */}
          <div className="fix-heading">
            <span className="fix-eyebrow">
              <span className="fix-eyebrow-dot"></span>
              SERVICES & REPAIRS
            </span>

            <h2 className="fix-title">
              What I <span>fix.</span>
            </h2>

            <p className="fix-description">
              From annoying little problems to important home repairs,
              I'm here to help you get things working again.
            </p>
          </div>

          {/* SERVICES */}
          <div className="fix-grid">
            {services.map((service) => (
              <article className="fix-card" key={service.number}>
                <div className="fix-card-top">
                  <div className="fix-icon">
                    {service.icon}
                  </div>

                  <span className="fix-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="fix-card-description">
                  {service.description}
                </p>

                <a href="#booking" className="fix-card-link">
                  <span>Book this service</span>

                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          {/* BOTTOM BANNER */}
          <div className="fix-bottom">
            <div className="fix-bottom-text">
              <div className="fix-bottom-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>

              <div>
                <h3>Have a different repair in mind?</h3>
                <p>
                  Tell me what you need. If I can help, we'll find a solution.
                </p>
              </div>
            </div>

            <a href="#booking" className="fix-bottom-btn">
              Tell me about it
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
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
    </main>
  )
}

export default Main