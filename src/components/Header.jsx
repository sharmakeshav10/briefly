import React from "react";
import { PiArticleNyTimesBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between mx-20 pt-2">
      <div className="flex items-center">
        <PiArticleNyTimesBold size={40} />
        <span className="text-3xl font-semibold ml-1">Briefly</span>
      </div>
      <button
        className="bg-black text-white px-4 rounded-full"
        onClick={() => window.open("https://github.com/sharmakeshav10/briefly")}
      >
        Github
      </button>
    </div>
  );
};

export default Header;
