import React from "react";
import { FaRegCopy } from "react-icons/fa";

const Summarize = () => {
  return (
    <div className="w-full flex flex-col items-center mx-10 my-10 ">
      {/* form */}
      <div className="relative w-full max-w-2xl ">
        <form className="flex w-full" type="submit">
          <FaRegCopy className="absolute top-3 left-1" />
          <input
            placeholder="Enter your URL"
            type="url"
            className="shadow-lg h-10 rounded-md pl-6 flex-1"
            // value=""
            onChange={() => {}}
          />
          <button className="bg-black text-white h-10 px-4 rounded-md ml-2">
            Submit
          </button>
        </form>
      </div>

      {/* form */}
      <div className="relative w-full max-w-2xl">
        <form className="flex w-full" type="submit">
          <FaRegCopy className="absolute top-3 left-1" />
          <input
            placeholder="Enter your URL"
            type="url"
            className="shadow-lg h-10 rounded-md pl-6 flex-1"
            // value=""
            onChange={() => {}}
          />
          <button className="bg-black text-white h-10 px-4 rounded-md ml-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Summarize;
