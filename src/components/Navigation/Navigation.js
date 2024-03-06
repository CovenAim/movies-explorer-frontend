import React from 'react';
import "../Navigation/Navigation.css"
import otherLogoAcc from "../../images/otherLogoAcc.svg";


function Navigation({ onClose }) {
    return (
        
            <div className="main-navigation">
                <div className="main-navigation__close" onClick={onClose}>
                    <span></span>
                    <span></span>
                </div>
                <div className="main-menu-container">
                    <a href="/" className="main-navigation__link main-navigation__link--home">Главная</a>
                    <a href="/movies" className="main-navigation__link main-navigation__link--movies">Фильмы</a>
                    <a href="/saved-movies" className="main-navigation__link main-navigation__link--saved-movies">Сохранённые фильмы</a>
                    <button className="main-navigation__button">
                        <img src={otherLogoAcc} className="header__logo-account" alt="Account Logo" />
                        </button>
                </div>
            </div>
        
    )
}

export default Navigation;