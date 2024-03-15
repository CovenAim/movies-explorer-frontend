import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  const location = useLocation();
  const hideFooterPaths = ['/movies', '/saved-movies', '/profile', '/signup', '/signin', '/404'];
  const shouldRenderFooter = !hideFooterPaths.includes(location.pathname);

  if (!shouldRenderFooter) {
    return null;
  }

  return (
    <footer className="project-info">
      <div className="project-description">
        <p className="project-description-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="horizontal-divider" />
      </div>
      <div className="footer">
        <p className="yandex-praktikum-date">© 2024</p>
        <div className="project-details3">
          <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="yandex-praktikum-text">Яндекс.Практикум</a>
          <a href="https://github.com/CovenAim/" target="_blank" rel="noreferrer" className="yandex-praktikum-github">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
