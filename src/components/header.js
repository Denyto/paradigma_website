import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/logo2.svg';
import point from '../assets/img/point.svg';
import pdf from '../assets/img/pdf.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>каталог</li>
          <li>Преимущества</li>
          <li>Примеры работ</li>
          <li>монтаж</li>
          <li>отзывы</li>
          <li>Ответы на вопросы</li>
          <li>контакты</li>
        </ul>
      </nav>
      <hr></hr>
      <div className="header__top">
        <div className="header__top__item">
          <p>
            <b>Кровельные и фасадные</b> материалы в Тюмени и области.
          </p>
          <p>Профессиональный монтаж с 2010 года.</p>
        </div>
        <div className="header__top__item">
          <div className="header__top__item__circle">
            <img src={pdf} alt="pdf" />
          </div>
          <p> Скачать прайс-каталог</p>
        </div>
        <div className="header__top__item">
          <img src={logo2} alt="logo2" />
        </div>
        <div className="header__top__item">
          <div className="header__top__item__point">
            <img src={point} alt="point" />
          </div>
          <p> Отвечаем онлайн</p>
        </div>
        <div className="header__top__item">Пн-Пт 9:00 - 18:00, Сб 10:00 - 18:00</div>
      </div>
    </header>
  );
}

export default Header;
