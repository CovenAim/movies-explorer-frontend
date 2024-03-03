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
                      alt="Search Icon"
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
                      alt="Magnifier Icon"
                  />
              </div>
            </div>
          </div>
          <div class="search-form__line"></div>
        </>
      );
    }

export default SearchForm;