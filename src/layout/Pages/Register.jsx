import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { setUser, handleGoogleLogin, handleRegister, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Length must be at least 6 character ");
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    handleRegister(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...res.user, photoURL: photo, displayName: name });
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      // navigate("/");

      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSocialLogin = () => {
    handleGoogleLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <h2 className="text-4xl text-center">
              Register for Exclusive Access
            </h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-6">
              <form onSubmit={handleSubmit} className="card-body pb-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo-url"
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
                </div>
                {error && <p className="mb-2 text-red-500 text-sm">{error}</p>}

                <div className="form-control mt-4">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <button
                onClick={handleSocialLogin}
                className="btn btn-primary w-10/12 mx-auto"
              >
                Register with Google
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
              <p className="mb-6 text-center">
                Already have an account? Please
                <Link to={"/login"} className="text-blue-500 font-medium ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
