import { Field, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalLogin = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmitBack = (e) => {
    e.preventDefault();

    fetch("https://grupo-3-news-back-end-1ct2.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-navbar">
        <Modal.Title>
          <b style={{ color: "white" }}>Bienvenido!</b>
        </Modal.Title>
      </Modal.Header>
      <Container>
        <Formik
          initialValues={{ email: "", pass: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Éste campo esta vacio!";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email incorrecto!";
            }

            if (!values.pass) {
              errors.pass = "Éste campo esta vacio!";
            } else if (
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/i.test(
                values.pass
              )
            ) {
              errors.pass =
                "tu contraseña debe contener solo letras y numeros!";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log("values", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Container className="d-flex">
              <Form className="w-100">
                <label className="my-2">
                  <b>Email</b>
                </label>
                <Field
                  onInput={(e) => setEmail(e.target.value)}
                  type="mail"
                  name="email"
                  value={values.email}
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.email && touched.email && errors.email}
                </div>
                <br />
                <label className="my-2">
                  <b> Contraseña </b>
                </label>
                <Field
                  onInput={(e) => setPass(e.target.value)}
                  type="password"
                  name="pass"
                  value={values.pass}
                  className={`form-control ${
                    errors.pass && touched.pass && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.pass && touched.pass && errors.pass}
                </div>
                <a
                  rel="stylesheet"
                  className="text-center mt-4 mb-4"
                  href="Contraseña.jsx"
                >
                  Olvidaste tu Contraseña? Haz click aquí
                </a>
                <br />
                <div className="d-flex justify-content-center">
                  <input
                    onClick={(e) => handleSubmitBack(e)}
                    type={"submit"}
                    value="Ingresar"
                    className={"btn btn-success w-50 my-2"}
                  />
                </div>
              </Form>
            </Container>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default ModalLogin;
