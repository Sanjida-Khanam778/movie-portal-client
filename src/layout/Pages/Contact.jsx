import React from "react";

const Contact = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Get in Touch with Us</h1>
          <p className="py-6">
            We’re here to help! Reach out for questions, feedback, or support
            anytime.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm lg:max-w-max shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="flex flex-col gap-4 lg:flex-row justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
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
                  placeholder="your email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="your phone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
