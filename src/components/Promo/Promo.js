import React from 'react';
import "../Promo/Promo.css";
import NavTab from "../NavTab/NavTab";
import landingLogo from "../../images/landing-logo.svg"


function Promo() {
  return (
    <div className="student-main-page">
      <div className="promo-info">
      <img
                      src={ landingLogo }
                      className="search-form__icon-landing"
                      alt="Лого"
                  />
        <p className="promo-info__title">Учебный проект студента факультета Веб-разработки.</p>
        <NavTab />
      </div>
    </div>
  );
}
export default Promo