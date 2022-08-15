import React from "react";
import "./Contact.scss";
import sendForm from '../../acitons/sendForm';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  return (
    <div className="container contact-form">
      <h1 className="title">Контакты</h1>
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
        onSubmit={(values, {setSubmitting}) => {
          sendForm(values.name, values.email, values.message)
          console.log(values);
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
              <ErrorMessage component="div" className="form-field__error" name="name" />
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
              <ErrorMessage component="div"  className="form-field__error" name="email" />
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
              <ErrorMessage component="div" className="form-field__error" name="message" />
            </div>
          </div>
          <button className="form-btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
