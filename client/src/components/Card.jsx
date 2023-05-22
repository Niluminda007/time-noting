import React from "react";
import Tasks from "./Tasks";

const Card = () => {
  return (
    <div className="bg-dark rounded-lg w-[300px] h-auto flex flex-col items-center p-8 mt-6">
      <h1 className="text-[1.2rem] text-light_blue font-medium bg-[rgba(255,255,255,0.1)] p-2 rounded-lg">
        2023.05.22
      </h1>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm">checked In : 9.00 am</h3>
        <h3 className="text-sm">checked Out : 17.00 pm</h3>
      </div>
      <Tasks />
    </div>
  );
};

export default Card;
