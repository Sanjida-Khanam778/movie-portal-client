import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const About = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="w-10/12 mx-auto mb-12 lg:mb-24">
      <div
        className={`flex items-center text-center justify-center flex-col w-10/12 mx-auto ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3">
          About Us
        </h2>
        <p
          className={`md:text-lg font-medium ${
            theme === "dark" ? "text-white" : "text-black"
          } text-opacity-55 mb-6 lg:mb-12 text-center`}
        >
          Discover the World of Cinema at Your Fingertips
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`card ${theme==='dark'?'text-black bg-gray-200':'text-black bg-gray-200'} shadow-xl`}>
          <figure>
            <img src="https://i.ibb.co/2yqWgBH/slider1.jpg" alt="Mission" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Our Mission
              <div className="badge bg-red-500 border-none text-white">Inspire</div>
            </h2>
            <p className="text-black text-opacity-70">
              To bring the magic of cinema closer to everyone by creating a
              space where movie lovers can explore, share, and celebrate
              stories.
            </p>
          </div>
        </div>
        <div className={`card ${theme==='dark'?'text-black bg-gray-200':'text-black bg-gray-200'} shadow-xl`}>
          <figure>
            <img src="https://i.ibb.co/2yqWgBH/slider1.jpg" alt="Vision" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Our Vision
              <div className="badge bg-red-500 border-none text-white">
                Dream
              </div>
            </h2>
            <p className="text-black text-opacity-70">
              To become the go-to platform for all things movies, inspiring
              creativity and connecting cinephiles worldwide.
            </p>
          </div>
        </div>
        <div className={`card ${theme==='dark'?'text-black bg-gray-200':'text-black bg-gray-200'} shadow-xl`}>
          <figure>
            <img src="https://i.ibb.co/2yqWgBH/slider1.jpg" alt="Values" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Our Values
              <div className="badge bg-red-500 border-none text-white">Integrity</div>
            </h2>
            <p className="text-black text-opacity-70">
              We believe in the power of storytelling, community, and
              innovation. Our portal is designed with users in mind, fostering a
              love for cinema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
