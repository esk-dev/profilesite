import React from "react";
import './Contact.scss';
export default function Contact() {
  return (

    <div className="container contact-form">
      <form>
        <div className="form-row-properties">
          <div className="form-field">
            <label className="form-field__label" for="name">Имя</label>
            <input className="form-field__input" type="text" name="name" required />
          </div>
          <div className="form-field">
            <label className="form-field__label" for="email">Email</label>
            <input className="form-field__input" type="email" name="email" required />
          </div>
        </div>
        <div className="form-row-textarea">
          <div className="form-field">
            <label className="form-field__label" for="message">Сообщение</label>
            <textarea className="form-field__input textarea" name="message" required />
          </div>
        </div>
        <button className="form-btn" type="submit">Отправить</button>
      </form>
    </div>
  );
}
