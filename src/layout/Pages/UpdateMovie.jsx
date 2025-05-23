import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const [err, setErr] = useState("");
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const releaseYears = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i
  );
  const [title, setTitle] = useState(data?.title);
  const [poster, setPoster] = useState(data?.poster);
  const [genre, setGenre] = useState(data?.genre);
  const [duration, setDuration] = useState(data?.duration);
  const [year, setYear] = useState(data?.year);
  const [rating, setRatings] = useState(data?.rating);
  const [summary, setSummary] = useState(data?.summary);
  const handleChange = (event) => {
    setGenre(event.target.value);
  };
  console.log(data?.genre)
  const email = user.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleRating = (rate) => {
    setRatings(rate);
  };

  const handleForm = (data) => {
    setErr("");
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
    fetch(`https://movie-portal-server-ten.vercel.app/movies/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congrates!",
            text: "Movie Updated successfully",
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
                  defaultValue={poster}
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
                  defaultValue={title}
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
                  defaultValue={genre}
                  onChange={handleChange}
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
                  defaultValue={duration}
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
                  defaultValue={year}
                  {...register("releaseYear", {
                    required: "Release year is required",
                  })}
                  className="input input-bordered w-full"
                >
                  <option value="">Select Year</option>
                  {releaseYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                         
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
                    allowFraction
                    initialValue={rating}
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                defaultValue={summary}
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
              <button className="btn btn-primary">Update Movie</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;