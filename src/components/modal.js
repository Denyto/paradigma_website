import { IMaskInput } from 'react-imask';
import classNames from 'classnames';
import { useState } from 'react';
import arrowRight from '../assets/img/arrow_right.svg';
import close from '../assets/img/close.svg';

function Modal({ callCloseModal }) {
  const [isRight, setIsRight] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const PhoneMask = '+{7}(000)000-00-00';

  function closeModal(e) {
    // e.stopPropagation();
    if (e.target.className === 'modal') {
      callCloseModal();
    }
  }

  function sendForm(num) {
    console.log('отправка номера -', num);
  }

  return (
    <div className="modal" onClick={closeModal}>
      <form className="modal__content">
        <div className="modal__close" onClick={callCloseModal}>
          <img src={close} alt="close" />
        </div>
        <p className="first">Быстро оставить заявку</p>
        <p>Введите номер, мы позвоним вам в течение 10 минут в рабочее время</p>
        <p>Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
        <p>Введите номер телефона</p>
        <IMaskInput
          mask={PhoneMask}
          onAccept={(value, mask) => {
            if (mask._unmaskedValue.length > 10) {
              setIsFull(true);
            } else {
              setIsFull(false);
            }
          }}
          placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
        />
        <button
          className={classNames('modal__button', { dis: !isRight || !isFull })}
          disabled={!isRight}
          onClick={() => {
            sendForm(document.querySelector('input').value);
            callCloseModal();
          }}
        >
          <p>Позвоните мне</p>
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <div className="modal__check">
          <input
            type="checkbox"
            onChange={(e) => {
              if (isFull) setIsRight(e.target.checked);
            }}
          ></input>
          <div>
            <p>Нажимая кнопку вы соглашаетесь с условиями</p>
            <span>Политики конфиденциальности</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
