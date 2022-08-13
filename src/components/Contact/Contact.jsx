import React from "react";

export default function Contact() {
  return (

    <div className="container contact-form">
      <form>
        <div className="form-row-properties">
          <input placeholder="Имя" type="text" name="name" required />
          <input placeholder="Email" type="email" name="email" required />
        </div>
        <div className="form-row-textarea">
          <textarea placeholder="Сообщение" name="message" required />
        </div>
        <button type="submit" />
      </form>
    </div>
  );
}
