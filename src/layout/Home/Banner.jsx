import React from "react";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      image: "https://i.ibb.co.com/2yqWgBH/slider1.jpg",
      title: "Harry Porter",
      description: "Horror | Sc-Fi",
      rating: "IMDB Rating: 5.5/10"
    },
    {
      id: "slide2",
      image: "https://i.ibb.co.com/WGqqJ4S/slider2.webp",
      title: "Nature's Beauty",
      description: "Explore the untouched beauty of the natural world.",
      rating: "IMDB Rating: 5.5/10"

    },
    {
      id: "slide3",
      image: "https://i.ibb.co.com/kxSrYqW/slider3.jpg ",
      title: "Journey Beyond",
      description: "Embrace the thrill of the unknown and venture far.",
      rating: "IMDB Rating: 5.5/10"

    },
    {
      id: "slide4",
      image: "https://i.ibb.co.com/b5NcNgJ/slider4.jpg",
      title: "THE PLATFORM 2 (2024)",
      description: "Horror | Sc-Fi",
      rating: "IMDB Rating: 5.5/10"

    },
  ];

  return (
   <div className="w-10/12 mx-auto mt-16">
     <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div id={slide.id} key={index} className="carousel-item relative w-full">
          <img src={slide.image} alt={slide.title} className="w-full h-[550px] border-4 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute bg-black bg-opacity-30 bottom-10 left-20 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
            {/* <p className="text-lg">{slide.rating}</p> */}
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#${slides[index === 0 ? slides.length - 1 : index - 1].id}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#${slides[(index + 1) % slides.length].id}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Banner;
