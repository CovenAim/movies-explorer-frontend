import React, { useState } from "react";
import "../Profile/Profile.css";

function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("Александр");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [focusedInput, setFocusedInput] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveChanges = () => {
    // Валидация email
    if (!validateEmail(email)) {
      setEmailError("Некорректный email");
      return;
    } else {
      setEmailError("");
    }

    // Валидация имени
    if (name.length < 2) {
      setNameError("Имя должно содержать минимум 2 символа");
      return;
    } else {
      setNameError("");
    }

    setIsEditMode(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className="profile-card">
      <p className="profile-card__greeting">Привет, {name}!</p>
      <div className="profile-card__user-profile">
        <div className="profile-card__personal-info-container">
          <div
            className={`profile-card__info-card-name${
              focusedInput === "name" ? " focused" : ""
            }`}
          >
            <p className="profile-card__name-text">Имя</p>
            {isEditMode ? (
              <>
                <input
                  className="profile-card__input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя"
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                />
                <p className="profile-card__error">{nameError}</p>
              </>
            ) : (
              <p className="profile-card__name-paragraph">{name}</p>
            )}
          </div>

          <div
            className={`profile-card__info-card-mail${
              focusedInput === "email" ? " focused" : ""
            }`}
          >
            <p className="profile-card__name-text">E-mail</p>
            {isEditMode ? (
              <>
                <input
                  className="profile-card__input"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите e-mail"
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                />
                <p className="profile-card__error">{emailError}</p>
              </>
            ) : (
              <p className="profile-card__name-paragraph">{email}</p>
            )}
          </div>
        </div>
        <div className="profile-card__account-actions">
          {isEditMode ? (
            <button className="profile-card__save-button" onClick={saveChanges}>
              Сохранить
            </button>
          ) : (
            <button
              className="profile-card__edit-button"
              onClick={toggleEditMode}
            >
              Редактировать
            </button>
          )}
          {!isEditMode && (
            <div className="profile-card__account-logout">
              <a href="#logout" className="profile-card__logout-button">
                Выйти из аккаунта
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
