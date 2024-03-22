import React from "react";

const HomeCard = ({name, image, price, category, description}) => {
  return (
    <div className="bg-white shadow-md p-2 rounded-md">
        <div className="w-40 min-h-[140px]">
            <img src={image} alt={name} className="w-full h-full"/>
        </div>
        <h3 className=" font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
        <p className="text-center text-slate-500 font-medium">{category}</p>
        <p className="text-center font-bold"><span className="text-green-600">₹</span><span>{price}</span></p>
    </div>
    );
};

export default HomeCard;
