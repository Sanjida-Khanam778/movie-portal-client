import React from 'react';

const About = () => {
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
        </div>
    );
};

export default About;