import React from 'react';
import searchButton from "../../images/find.svg"
import magnifierIcon from "../../images/magnifier.svg"
import "../SearchForm/SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <>
          <div className="search-form">
            <div className="search-form__field">
            <FilterCheckbox />
            <button className="search-form__icon-container">
                  <img
                      src={ searchButton }
                      className="search-form__icon"
                      alt="Иконка поиска"
                  />
                </button>
             
              <div className="search-form__input-container">
              <input 
                placeholder="Фильм" 
                type="text" 
                className="search-form__input"
              />
              <img
                      src={ magnifierIcon }
                      className="search-form__icon-magnifier"
                      alt="Иконка лупы"
                  />
              </div>
            </div>
          </div>
          <div class="search-form-line"></div>
        </>
      );
    }

export default SearchForm;