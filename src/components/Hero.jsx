import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="text-center pt-8 text-4xl font-extrabold m-4">
        Summarize articles with <br className="max-md:hidden" />
        <span className="bg-custom-gradient">Open AI GPT-4</span>
      </h1>
      <p className="text-center m-4 font-medium text-slate-600">
        Enhance your productivity with Briefly, our AI article summarizer,
        designed to provide you with concise overviews of long articles.
      </p>
    </div>
  );
};

export default Hero;
