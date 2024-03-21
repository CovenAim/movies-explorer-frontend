import React from "react";
import searchButton from "../../images/find.svg";
import magnifierIcon from "../../images/magnifier.svg";
import "../SearchForm/SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <>
      <section className="search-form">
        <form className="search-form__field">
          <img
            src={magnifierIcon}
            className="search-form__icon-magnifier"
            alt="Иконка лупы"
          />
          <input
            placeholder="Фильм"
            type="text"
            className="search-form__input"
          />

          <button className="search-form__icon-container">
            <img
              src={searchButton}
              className="search-form__icon"
              alt="Иконка поиска"
            />
          </button>
          <FilterCheckbox />
        </form>
      </section>
    </>
  );
}

export default SearchForm;
