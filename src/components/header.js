import { useState } from 'react';
import classNames from 'classnames';
import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/logo2.svg';
import point from '../assets/img/point.svg';
import pdf from '../assets/img/pdf.svg';
import phone from '../assets/img/phone.svg';
import viber from '../assets/img/viber.svg';
import telegram from '../assets/img/telegram.svg';
import Modal from './modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function submit(e) {
    setIsModalOpen(true);
  }

  function toggleMenu() {
    if (getComputedStyle(document.querySelector('.hamburger')).display === 'block') {
      setIsMenuOpen(!isMenuOpen);
    }
  }

  return (
    <header className="header">
      {isModalOpen && <Modal callCloseModal={() => setIsModalOpen(false)}></Modal>}
      <nav className={classNames('header__menu', { visible: isMenuOpen })}>
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
          <li className="header__menu__mobile">
            <p>
              <b>Кровельные и фасадные</b> материалы в Тюмени и области.
            </p>
            <p>Профессиональный монтаж с 2010 года.</p>
          </li>
          <li className="header__menu__mobile">
            <div className="header__top__item__circle">
              <img src={pdf} alt="pdf" />
            </div>
            <p> Скачать прайс-каталог</p>
          </li>
          <li className="header__menu__mobile">
            <div className="header__top__flex">
              <div className="header__top__item__point">
                <img src={point} alt="point" />
              </div>
              <p> Отвечаем онлайн</p>
            </div>
            <div className="header__top__flex">
              <a href="tel:8(800)222-54-60" target="blank">
                <img src={phone} alt="phone" />
              </a>
              <a href="https://www.viber.com/" target="blank">
                <img src={viber} alt="viber" />
              </a>
              <a href="https://t.me" target="blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </li>
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
          <div className="header__top__flex">
            <div className="header__top__item__point">
              <img src={point} alt="point" />
            </div>
            <p> Отвечаем онлайн</p>
          </div>
          <div className="header__top__flex">
            <a href="tel:8(800)222-54-60" target="blank">
              <img src={phone} alt="phone" />
            </a>
            <a href="https://www.viber.com/" target="blank">
              <img src={viber} alt="viber" />
            </a>
            <a href="https://t.me" target="blank">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
        <div className="header__top__item">
          <div className="header__top__flex">
            <div className="header__top__item__point">
              <img src={point} alt="point" />
            </div>
            <p>Пн-Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
          </div>

          <a href="tel:8(800)222-54-60" target="blank">
            <b>8 (800) 222-54-60</b>
          </a>
          <p onClick={submit}>Позвоните мне</p>
        </div>
        <span onClick={toggleMenu} className={classNames('hamburger', { rotate: isMenuOpen })}>
          <span className="hamburger-line"></span>
        </span>
      </div>
    </header>
  );
}

export default Header;
