import React from 'react'
import './article.css'

const Article = () => {
  const neighbours = [
    {
      number: '01',
      title: 'Phoenix',
      description: 'Reliable home repairs for Phoenix homeowners.',
      tag: 'Local service',
    },
    {
      number: '02',
      title: 'Scottsdale',
      description: 'Helping keep homes in great shape, one repair at a time.',
      tag: 'Nearby area',
    },
    {
      number: '03',
      title: 'Tempe',
      description: 'Quick, dependable help with everyday home repairs.',
      tag: 'Nearby area',
    },
    {
      number: '04',
      title: 'Glendale',
      description: 'Your trusted local handyman for the jobs on your list.',
      tag: 'Nearby area',
    },
  ]

  return (
    <article className="article">
      <div className="container">
        <div className="article-container">

          <div className="article-top">
            <div className="article-heading">
              <span className="article-label">
                <span className="article-dot"></span>
                LOCAL & INDEPENDENT
              </span>

              <h2>
                Neighbours in <span>Phoenix.</span>
              </h2>

              <p>
                Good work starts close to home. I help homeowners across
                Phoenix and nearby communities take care of the little
                repairs that make a big difference.
              </p>
            </div>

            <a href="#booking" className="article-button">
              Book a repair
              <span>↗</span>
            </a>
          </div>

          <div className="article-grid">
            {neighbours.map((item) => (
              <div className="article-card" key={item.number}>
                <div className="article-card-top">
                  <span className="article-number">{item.number}</span>

                  <span className="article-arrow">↗</span>
                </div>

                <div className="article-card-content">
                  <span className="article-tag">
                    <span></span>
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <a href="#booking" className="article-card-link">
                  Get a repair quote
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="article-bottom">
            <div className="article-bottom-icon">⌖</div>

            <div>
              <h3>Just around the corner.</h3>
              <p>
                Not sure if your neighbourhood is covered? Get in touch
                and tell me what you need fixed.
              </p>
            </div>

            <a href="#booking" className="article-bottom-link">
              Check availability <span>→</span>
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}

export default Article