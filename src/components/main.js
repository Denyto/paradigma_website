import { useState } from 'react';
import classNames from 'classnames';
import circles from '../assets/img/circles.svg';
import arrow from '../assets/img/arrow.svg';
import icon from '../assets/img/icon.svg';
import button from '../assets/img/buttonMobile.svg';

function Main() {
  const [isUp, setIsUp] = useState(false);

  function bulletsUp() {
    setIsUp(!isUp);
  }

  return (
    <main>
      <section className="bullets">
        <div className="bullets__elem">
          <p>
            <b>Гарантия от 50 лет</b> на материалы и 5 лет на монтаж
          </p>
        </div>
        <div className="bullets__shadow"></div>
        <div className="bullets__elem">
          <p>
            <b>Замер, монтажный проект</b> и еще 4 услуги бесплатно{' '}
          </p>
        </div>
        <div className="bullets__shadow"></div>
        <div className="bullets__elem">
          <p>
            <b>Сметы точны</b> до копейки{' '}
          </p>
        </div>
        <div className="bullets__shadow"></div>
        <div className="bullets__elem">
          <p>
            <b>Поэтапная оплата,</b> кредит или рассрочка{' '}
          </p>
        </div>
        <div className="bullets__shadow"></div>
        <div className="bullets__elem">
          <p>
            <b>Наши крыши в каждом поселке</b> и дачном сообществе региона{' '}
          </p>
        </div>
      </section>
      <section className="text">
        <p className="text__start">
          Продажа <b>кровельных материалов</b> в Тюмени и Тюменской области{' '}
        </p>
        <div className="text__install">
          <div>
            <img src={circles} alt="circles" />
          </div>
          <p>и монтаж под ключ</p>
        </div>
        <div className="text__buttons">
          <div className="text__button">
            <p>Рассчитать стоимость материалов и монтажа</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="text__button">
            <p>записаться на просмотр объектов</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="text__bottom">
          <img src={icon} alt="icon" />
          <p>
            <b>Ответьте на несколько вопросов и получите</b> сметную стоимость и 3 подарка за
            экономию нашего времени
          </p>
        </div>
      </section>
      <section className={classNames('bullets__mobile', { up: isUp })}>
        <img className="pulse" onClick={bulletsUp} src={button} alt="button" />
      </section>
    </main>
  );
}

export default Main;
