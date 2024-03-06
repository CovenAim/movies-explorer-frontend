import React, { useState } from "react";
import "../FilterCheckbox/FilterCheckbox.css";
import tumblerOn from "../../images/tumbler-on.svg"
import tumblerOff from "../../images/tumbler-off.svg"

function FilterCheckbox() {
    const [isActive, setIsActive] = useState(true);

    const toggleButton = () => {
      setIsActive(!isActive);
    };

    return (
        
        <div className="filter-checkbox">
            <div class="search-form-vertical-line"></div>
            <button onClick={toggleButton} className={`filter-checkbox__button ${isActive ? "filter-checkbox__button_active" : ""}`}>
                <img src={isActive ? tumblerOn : tumblerOff} alt={isActive ? "Включено" : "Выключено"} />
            </button>
            <p className="filter-checkbox__label">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;