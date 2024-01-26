import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [error, setError] = useState("");
  const navi = useNavigate();

  const resetPassword = () => {
    const data = { email: email };

    axios.post("http://localhost:3001/auth/forgot-password", data).then((response) => {
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setResetPasswordSuccess(true);
      }
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address below, and we'll send you a link to
                        reset your password!
                      </p>
                    </div>
                    {!resetPasswordSuccess ? (
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <button
                          type="button"
                          className="btn btn-primary btn-user btn-block"
                          onClick={resetPassword}
                        >
                          Reset Password
                        </button>
                      </form>
                    ) : (
                      <div>
                        <p>Password reset link sent! Check your email.</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-user btn-block"
                          onClick={() => navi("/login")}
                        >
                          Back to Login
                        </button>
                      </div>
                    )}
                    <hr />
                    <div className="text-center">
                      <p className="small" onClick={() => navi("/register")}>
                        Create an Account!
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="small" onClick={() => navi("/login")}>
                        Already have an account? Login!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;