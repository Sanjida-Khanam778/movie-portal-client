import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    handleLogin(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSocialLogin = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
        <h2 className="text-4xl text-center">Welcome Back! Log In to Continue</h2>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-1">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleSocialLogin} className="btn btn-primary">
                  Login with Google
                </button>
              </div>
              <p>
                Don't have an account? Please <Link to={"/register"}>Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
