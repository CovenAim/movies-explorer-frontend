import "../Footer/Footer.css"

function Footer() {
    return (
      <div className="project-info">
        <div className="project-description">
      <p className="project-description-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="horizontal-divider" />
    </div>
        <div className="footer">
          <p className="yandex-praktikum-text">© 2024</p>
          <div className="project-details3">
            <a href="https://practicum.yandex.ru/" className="yandex-praktikum-text">Яндекс.Практикум</a>
            <a href="https://github.com/CovenAim/" className="yandex-praktikum-github">Github</a>
          </div>
        </div>
      </div>
    );
  }
export default Footer