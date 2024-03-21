import React from 'react';
import "../Navigation/Navigation.css"
import otherLogoAcc from "../../images/otherLogoAcc.svg";

function Navigation({ onClose }) {
    const isActive = (path) => {
        return window.location.pathname === path;
    };

    return (
        <section className="main-navigation">
            <div className="main-navigation__close" onClick={onClose}>
                <span></span>
                <span></span>
            </div>
            <div className="main-menu-container">
                <a href="/" className={`main-navigation__link main-navigation__link--home ${isActive("/") ? "active" : ""}`}>Главная</a>
                <a href="/movies" className={`main-navigation__link main-navigation__link--movies ${isActive("/movies") ? "active" : ""}`}>Фильмы</a>
                <a href="/saved-movies" className={`main-navigation__link main-navigation__link--saved-movies ${isActive("/saved-movies") ? "active" : ""}`}>Сохранённые фильмы</a>
                <button className="main-navigation__button">
                    <img src={otherLogoAcc} className="header__logo-account" alt="Лого аккаунта" />
                </button>
            </div>
        </section>
    )
}

export default Navigation;
