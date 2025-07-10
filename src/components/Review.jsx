import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
      Customer Feedback
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Clara Steven"
          review="The food was super fresh and full of flavor! Everything arrived hot and neatly packed. I’ve already recommended FoodieWeb to my friends."
        />
        <ReviewCard
          img={img2}
          name="Jack Turner"
          review="Really impressed with the fast delivery and delicious taste. The portion sizes were perfect too. Will definitely order again!"
        />
        <ReviewCard
          img={img3}
          name="Sasha Walsh"
          review="Absolutely loved the dishes! The presentation, flavors, and overall experience were amazing. It felt like a treat at home."
        />
      </div>
    </div>
  );
};

export default Review;
