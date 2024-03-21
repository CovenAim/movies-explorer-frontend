import React from 'react';
import "./404.css"

function NotFound() {
    return (
        <div className="page-not-found">
        <div className="page-not-found__error-container">
          <p className="page-not-found-title">404</p>
          <p className="page-not-found__error-message">Страница не найдена</p>
        </div>
        <a href="/" className="page-not-found__back-button">Назад</a>
      </div>
    )
}

export default NotFound;