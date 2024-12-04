import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { setUser, handleGoogleLogin, handleRegister, updateUserProfile } =
    useContext(AuthContext);
    const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password);
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
    handleGoogleLogin().then(() => {
      // setUser(res.user)
      navigate("/");
    })
    .catch(err=>{
        toast.error(err.message)
    })
  };

  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content">
            <h2 className="text-4xl text-center">Register for Exclusive Access</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
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

                <div className="form-control mt-6 space-y-1">
                  <button className="btn btn-primary">Register</button>
                  <button
                    onClick={handleSocialLogin}
                    className="btn btn-primary"
                  >
                    Register with Google
                  </button>
                  <p>
                    Already have an account? Please <Link to={'/login'}>Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
