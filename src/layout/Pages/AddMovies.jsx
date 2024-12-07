import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMovies = () => {
  const [err, setErr] = useState("");
  const [ratingErr, setRatingErr] = useState("");
  const { user } = useContext(AuthContext);
  const email = user.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    setRatingErr("")
  };

  const handleForm = (data) => {
    setErr("");
    setRatingErr("")
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

    const poster = data.poster;
    const title = data.title;
    const genre = data.genre;
    const duration = data.duration;
    const year = data.releaseYear;
    const summary = data.summary;
    if (!regex.test(poster)) {
      toast.error("Poster must be a link");
      return;
    }
    if (duration <= 60) {
      setErr("Must be greater than 60");
      return;
    }

    if (rating == 0) {
      setRatingErr("Please Select a rating");
      return;
    }

    const movie = {
      email,
      poster,
      title,
      genre,
      duration,
      year,
      rating,
      summary,
    };
    fetch("https://movie-portal-server-ten.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congrates!",
            text: "Movie added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleForm)} className="card-body">
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Poster</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("poster", { required: "This is required" })}
                  placeholder="poster"
                  type="text"
                />
                <p className="text-red-500">{errors.poster?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("title", {
                    required: "This is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                  })}
                  placeholder="title"
                  type="text"
                />
                <p className="text-red-500">{errors.title?.message}</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className="select select-bordered w-full relative"
                  {...register("genre", { required: "Please select a genre" })}
                >
                  <option value="">Select a Genre</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="thriller">Thriller</option>
                  <option value="horror">Horror</option>
                </select>

                <p className="text-red-500">{errors.genre?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("duration", { required: "This is required" })}
                  placeholder="minutes"
                  type="number"
                />
                <p className="text-red-500">{err}</p>
                <p className="text-red-500">{errors.duration?.message}</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 flex-col md:flex-row">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select
                  id="releaseYear"
                  {...register("releaseYear", {
                    required: "Please select a release year",
                  })}
                  className="select select-bordered"
                >
                  <option value="">Select a Year</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                {errors.releaseYear && (
                  <p className="text-red-500">{errors.releaseYear?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>

                <div className="flex px-3 mt-2 items-center gap-2">
                  <Rating
                    onClick={handleRating}
                    size={30}
                    fillColor="gold"
                    emptyColor="gray"
                    allowHalf={true}
                    allowFraction
                  />
                </div>
                <p className="text-red-500 mt-3">{ratingErr}</p>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                {...register("summary", {
                  required: "This is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                })}
                cols="30"
                rows="2"
              ></textarea>
              <p className="text-red-500">{errors.summary?.message}</p>
            </div>
            <div className="form-control mt-6 space-y-1">
              <button className="btn btn-primary">Add Movie</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovies;
