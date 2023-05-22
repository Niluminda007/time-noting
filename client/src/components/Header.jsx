import React from "react";

const Header = () => {
  return (
    <nav className="w-full flex justify-center bg-dark py-4">
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-light_blue flex items-center justify-center">
          E
        </div>
        <h1 className="flex items-center justify-center">Event Tracker</h1>
      </div>
    </nav>
  );
};

export default Header;
