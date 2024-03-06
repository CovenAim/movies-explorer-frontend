import React from 'react';
import "../Portfolio/Portfolio.css"

function Portfolio() {
    return (
      <div className="portfolio">
        <h2 className="portfolio__heading">Портфолио</h2>
        <div className="portfolio__projects">
          <div className="portfolio__project">
            <a href="https://github.com/CovenAim/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__project-title">Статичный сайт</a>
            <a href="https://github.com/CovenAim/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__project-link">↗</a>
          </div>
          <div className="portfolio__project-line" />
          <div className="portfolio__project">
            <a href="https://github.com/CovenAim/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__project-title">Адаптивный сайт</a>
            <a href="https://github.com/CovenAim/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__project-link">↗</a>
          </div>
          <div className="portfolio__project-line" />
          <div className="portfolio__project">
            <a href="https://github.com/CovenAim/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer" className="portfolio__project-title">Одностраничное приложение</a>
            <a href="https://github.com/CovenAim/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer" className="portfolio__project-link">↗</a>
          </div>
        </div>
      </div>
    )
  }

export default Portfolio;