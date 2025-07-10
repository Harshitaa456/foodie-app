import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">   
        <h1 className="text-orange-500 font-semibold text-6xl">
          Flavors That Make You Feel at Home.
        </h1>
        <p className="text-orange-300">
          We serve fresh, wholesome food made with love and quality ingredients.
          Your next favorite dish is just a click away.
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;