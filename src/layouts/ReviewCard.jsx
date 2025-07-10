import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-orange-400">
      
      <div>
        <p className="text-lightText leading-relaxed">
          {props.review || "The food was fresh, flavorful, and delivered right on time. A wonderful experience from start to finish!"}
        </p>

        <div className="flex gap-1 mt-3 text-yellow-400 text-lg">
          ★★★★★
        </div>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;

