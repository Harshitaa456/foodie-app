import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-32 space-y-8 py-10">
      <img src={img} alt="img" className="w-full max-w-md" />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-semibold text-4xl">Why Choose Us?</h1>
        <p className="leading-relaxed">
          At QuickBite, we take pride in offering meals prepared with the finest and freshest ingredients.
          Each dish is crafted with attention to detail to deliver exceptional taste and quality.
          Our service is defined by prompt and reliable delivery, ensuring your order reaches you hot and on time.
          We offer an extensive selection of dishes, thoughtfully curated to suit diverse preferences.
        </p>
        <p className="leading-relaxed">
          We follow strict hygiene and safety protocols to ensure your food is safe, healthy, and delicious.
        </p>
        <div className="flex justify-center">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;


