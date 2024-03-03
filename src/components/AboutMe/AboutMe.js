import "../AboutMe/AboutMe.css";
import me from "../../images/me.jpeg"
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
      <div className="about-me">
        <div className="about-me__header">
          <p id="student" className="about-me__title">Студент</p>
          <div className="about-me__divider" />
        </div>
        <div className="about-me__info">
          <div className="about-me__details">
            <p className="about-me__name">Александр</p>
            <div className="about-me__bio">
              <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__text">Родился в городе Усть-каменогорск(Казахстан). Живу в Москве. В прошлом году, летом я женился, пришлось даже брать академический отпуск. 
              Работаю в компании VK с 2022 года. Многие попытки найти себя в ИТ привели меня в Яндекс, и после профильного начального курса, я наконец нашел себя во фронте. 
              По окончании хотел бы продолжить развиваться во фронтенде.</p>
            </div>
            <a href="https://github.com/CovenAim" target="_blank" rel="noreferrer" className="about-me__github-link">Github</a>
          </div>
          
            <img src={me} className="about-me__image" alt="Me" />
          
        </div>
        <Portfolio />
      </div>
    );
  }

export default AboutMe;
<p className="frontend-bio-text">Родился в городе Усть-каменогорск(Казахстан). Живу в Москве. В прошлом году, летом я женился, пришлось даже брать академический отпуск. 
              Работаю в компании VK с 2022 года. Многие попытки найти себя в ИТ привели меня в Яндекс, и после профильного начального курса, я наконец нашел себя во фронте. 
              По окончании хотел бы продолжить развиваться во фронтенде, совершенствовать те знания что уже полчил на курсе от Яндекса.</p>