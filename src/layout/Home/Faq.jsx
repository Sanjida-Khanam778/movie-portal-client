import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import image from '../../assets/faq.png'

const Faq = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <div
        className={`flex items-center text-center justify-center flex-col w-10/12 mx-auto ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3">Frequently Asked Questions</h2>
        <p
          className={`md:text-lg font-medium ${
            theme === "dark" ? "text-white" : "text-black"
          } text-opacity-55 mb-6 lg:mb-12 text-center`}
        >
          Experience the Best: Handpicked the Top 6 Movies That Critics and Fans
          Love Alike with Outstanding Ratings.
        </p>
      </div>
      <div
        className={`flex flex-col gap-6 lg:flex-row justify-between items-center w-10/12 lg:w-2/3 border  border-opacity-10 mx-auto mb-24 p-8 rounded-xl ${
          theme === "dark"
            ? "text-white border-white"
            : "text-black border-black"
        }`}
      >
        <div className="h-full">
        <img src={image} className="h-full" alt="" />
        </div>
        <div>
          <div className="join join-vertical w-full">
            <div
              className={`collapse collapse-arrow join-item border-base-300 border border-opacity-10 ${
                theme === "dark"
                  ? "text-white border-white"
                  : "text-black border-black"
              }`}
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What is FilmyScope?
              </div>
              <div className="collapse-content">
                <p>
                  FilmyScope is an online platform where you can explore,
                  discover, and rate movies. Whether you’re a film enthusiast or
                  a casual viewer, we have something for everyone!
                </p>
              </div>
            </div>
            <div
              className={`collapse collapse-arrow join-item border-base-300 border border-opacity-10 ${
                theme === "dark"
                  ? "text-white border-white"
                  : "text-black border-black"
              }`}
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do I need an account to use this platform?
              </div>
              <div className="collapse-content">
                <p>
                  You can browse movies without an account, but to rate, review,
                  or add movies to your favorites, you’ll need to sign up for a
                  free account.
                </p>
              </div>
            </div>
            <div
              className={`collapse collapse-arrow join-item border-base-300 border border-opacity-10 ${
                theme === "dark"
                  ? "text-white border-white"
                  : "text-black border-black"
              }`}
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I find a specific movie?
              </div>
              <div className="collapse-content">
                <p>
                  Use the search bar at the top of the all movie page to type in
                  the movie’s title.
                </p>
              </div>
            </div>
            <div
              className={`collapse collapse-arrow join-item border-base-300 border border-opacity-10 ${
                theme === "dark"
                  ? "text-white border-white"
                  : "text-black border-black"
              }`}
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
              Is the website mobile-friendly?
              </div>
              <div className="collapse-content">
                <p>
                Yes, our platform is optimized for use on mobile devices as well as desktops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
