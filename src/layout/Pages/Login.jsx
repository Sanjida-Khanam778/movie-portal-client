import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    const email = data.email;
    const password = data.password;

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
        <div className="hero-content flex-col">
          <h2 className="text-4xl text-center">
            Welcome Back! Log In to Continue
          </h2>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-6">
            <form onSubmit={handleSubmit(handleForm)} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("email", { required: "This is required" })}
                  placeholder="email"
                  type="email"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("password", { required: "This is required" })}
                  placeholder="password"
                  type="password"
                />
                <p className="text-red-500">{errors.email?.message}</p>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
                
              </div>
              
            </form>
            <button onClick={handleSocialLogin} className="btn btn-primary w-10/12 mx-auto">
                  Login with Google <FcGoogle className="text-2xl"></FcGoogle>
                </button>
                <p className="mb-6 text-center">
                Don't have an account? Please
                <Link to={"/register"} className="text-blue-500 ml-1 font-medium">Register</Link>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
