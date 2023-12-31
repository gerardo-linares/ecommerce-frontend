import React from "react";
import HeroImg from "./assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Ecommerce
            <br className="hidden lg:inline-block" />
            Descubre nuestras zapatillas exclusivas."
          </h1>
          <p className="mb-8 leading-relaxed"></p>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="inline-flex text-white bg-color_button border-0 py-2 px-6 focus:outline-none hover:bg-hover_button rounded text-lg"
            >
              Ingresa!
            </Link>
            <Link
              to="/products"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Productos
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
