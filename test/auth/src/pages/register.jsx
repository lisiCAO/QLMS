import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Repeat Password is required"),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // You can adjust the API endpoint based on your server setup
    axios.post("http://localhost:3001/register", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/login"); // Redirect to the login page after successful registration
      }
    });
  };

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  <Form className="user">
                    {/* First and Last Name */}
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <Field
                          type="text"
                          className="form-control form-control-user"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Field
                          type="text"
                          className="form-control form-control-user"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <Field
                        type="email"
                        className="form-control form-control-user"
                        name="email"
                        placeholder="Email Address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Password and Repeat Password */}
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <Field
                          type="password"
                          className="form-control form-control-user"
                          name="password"
                          placeholder="Password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Field
                          type="password"
                          className="form-control form-control-user"
                          name="repeatPassword"
                          placeholder="Repeat Password"
                        />
                        <ErrorMessage
                          name="repeatPassword"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    {/* Register Button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </button>

                    <hr />

                    {/* Social Media Register Buttons */}
                    <Link
                      to="/"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw"></i> Register with Google
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw"></i> Register with
                      Facebook
                    </Link>
                  </Form>
                </Formik>

                <hr />
                <div className="text-center">
                  <Link className="small" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link className="small" to="/login">
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
