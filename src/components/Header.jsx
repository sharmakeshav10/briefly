import React from "react";
import { PiArticleNyTimesBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between mx-20 pt-2">
      <div className="flex items-center">
        <PiArticleNyTimesBold size={40} />
        <span className="text-3xl font-semibold">Briefly</span>
      </div>
      <button
        className="bg-slate-500 px-4 rounded-full"
        onClick={() => window.open("https://github.com/sharmakeshav10")}
      >
        Github
      </button>
    </div>
  );
};

export default Header;
