import { IMaskInput } from 'react-imask';
import classNames from 'classnames';
import { useState } from 'react';
import arrowRight from '../assets/img/arrow_right.svg';
import close from '../assets/img/close.svg';

function Modal({ param }) {
  const [isRight, setIsRight] = useState(false);

  function closeModal(e) {
    // e.stopPropagation();
    if (e.target.className === 'modal') {
      param();
    }
  }
  const PhoneMask = '+{7}(000)000-00-00';
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content">
        <div className="modal__close" onClick={param}>
          <img src={close} alt="close" />
        </div>
        <p className="first">Быстро оставить заявку</p>
        <p>Введите номер, мы позвоним вам в течение 10 минут в рабочее время</p>
        <p>Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
        <p>Введите номер телефона</p>
        {/* <input type="text" placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"></input> */}

        <IMaskInput
          mask={PhoneMask}
          //   value=""
          onAccept={(value, mask) => console.log(mask._unmaskedValue.length)}
          placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
        />

        <button
          className={classNames('modal__button', { dis: !isRight })}
          disabled={!isRight}
          onClick={() => {
            console.log('sendForm');
            param();
          }}
        >
          <p>Позвоните мне</p>
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <div className="modal__check">
          <input type="checkbox" onChange={(e) => setIsRight(e.target.checked)}></input>
          <div>
            <p>Нажимая кнопку вы соглашаетесь с условиями</p>
            <span>Политики конфиденциальности</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
