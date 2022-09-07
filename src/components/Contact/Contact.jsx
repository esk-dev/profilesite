import React, { useRef, useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./Contact.scss";
import sendForm from "../../acitons/sendForm";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const btn = useRef(null);
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3500);
  }, []);

  return (
    <div className="container contact-form">
      <h1 className="title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={`Контакты`}
          idx={1}
        /></h1>
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p>
            Я заинтересован в своем развитии, поэтому нахожусь в поисках работы или проектов где смогу получить опыт и новые навыки. Для связи со мной вы можете использовать форму.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            message: Yup.string()
              .max(250, "Must be 100 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            sendForm(values.name, values.email, values.message);
            setSubmitting(false);
          }}
        >
          <Form className="form" noValidate>
            <div className="form-row-properties">
              <div className="form-field">
                <label className="form-field__label" htmlFor="name">
                  Имя
                </label>
                <Field
                  className="form-field__input"
                  id="name"
                  name="name"
                  type="text"
                />
                <ErrorMessage
                  component="div"
                  className="form-field__error"
                  name="name"
                />
              </div>
              <div className="form-field">
                <label className="form-field__label" htmlFor="email">
                  Email
                </label>
                <Field
                  className="form-field__input"
                  id="email"
                  name="email"
                  type="email"
                />
                <ErrorMessage
                  component="div"
                  className="form-field__error"
                  name="email"
                />
              </div>
            </div>
            <div className="form-row-textarea">
              <div className="form-field">
                <label className="form-field__label" htmlFor="message">
                  Сообщение
                </label>
                <Field
                  className="form-field__input textarea"
                  as="textarea"
                  id="message"
                  name="message"
                  type="text"
                />
                <ErrorMessage
                  component="div"
                  className="form-field__error"
                  name="message"
                />
              </div>
            </div>
            <button ref={btn} className="form-btn" type="submit">
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
