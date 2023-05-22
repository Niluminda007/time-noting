import React from "react";
import Card from "./Card";
import NewTaskButton from "./NewTaskButton";

const CardContainer = () => {
  return (
    <div className="bg-[rgba(71,75,79,0.1)] w-full h-full px-4 flex gap-4">
      <Card />
      <NewTaskButton />
    </div>
  );
};

export default CardContainer;
