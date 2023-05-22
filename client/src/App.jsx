import React from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full bg-space_white flex flex-col pb-4">
      <Header />
      <CardContainer />
    </div>
  );
};

export default App;
