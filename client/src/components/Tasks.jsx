import React from "react";

const tasks = [
  {
    heading: "Making an advanced todo app",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    heading: "Making Something Up",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const Tasks = () => {
  return (
    <div className="flex flex-col  gap-2">
      <h1 className="text-sm font-medium text-space_white">Task List </h1>
      {tasks.map(({ heading, description }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="text-light_blue font-medium text-sm bg-[rgba(255,255,255,0.1)] p-2 rounded-lg">
            {index + 1}
            {"." + heading}
          </p>
          <span className="text-space_white text-xs bg-[rgba(255,255,255,0.1)] p-2 rounded-lg">
            {"*" + description}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
