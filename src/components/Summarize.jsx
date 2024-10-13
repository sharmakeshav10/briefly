import React, { useEffect, useState } from "react";
import { FaCheck, FaCopy, FaRegCopy } from "react-icons/fa";
import { useLazyGetSummaryQuery } from "../services/summary";
import { IoCopyOutline } from "react-icons/io5";
import { PiPaperclipHorizontalThin } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";
import { BeatLoader, CircleLoader } from "react-spinners";

const Summarize = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [isCopied, setIsCopied] = useState("");

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSummarize = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      //pushes every new article to the all articles array
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      //set the articles to local storage
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleRemoveArticle = (index) => {
    setAllArticles((prevArticles) => {
      const updatedArticles = prevArticles.filter((_, idx) => idx !== index);

      localStorage.setItem("articles", JSON.stringify(updatedArticles));

      return updatedArticles;
    });
  };

  const handleCopyToClipboard = async (copyUrl) => {
    try {
      await window.navigator.clipboard.writeText(copyUrl);
      setIsCopied(copyUrl);
      setTimeout(() => {
        setIsCopied("");
      }, [2000]);
    } catch (e) {}
  };

  return (
    <div className="w-full flex flex-col items-center mx-10 my-10 ">
      {/* form */}
      <div className="relative w-full max-w-2xl pb-2">
        <form onSubmit={handleSummarize} className="flex w-full" type="submit">
          <PiPaperclipHorizontalThin className="absolute top-3 left-1" />
          <input
            placeholder="Enter your URL"
            required
            type="url"
            className="shadow-lg h-10 rounded-md pl-7 flex-1"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
          />
          <button className="bg-black text-white h-10 px-4 rounded-md ml-2">
            Submit
          </button>
        </form>
      </div>

      {/* locally stored articles */}
      {allArticles.map((item, idx) => {
        return (
          <div className="relative flex items-center w-full max-w-2xl shadow-md h-10 rounded-md px-7 my-2 cursor-pointer">
            {isCopied == item.url ? (
              <FaCheck className="absolute top-3 left-1" />
            ) : (
              <IoCopyOutline
                className="absolute top-3 left-1"
                onClick={() => handleCopyToClipboard(item.url)}
              />
            )}
            <p
              className="text-sm text-blue-700 font-medium truncate "
              onClick={() => setArticle(item)}
            >
              {item.url}
            </p>
            <TbTrash
              className="absolute top-3 right-1 text-red-600"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveArticle(idx);
              }}
            />
          </div>
        );
      })}

      {/* display summary */}
      <div className="w-full max-w-2xl mt-4">
        {isFetching ? (
          <BeatLoader size={25} className="text-center flex justify-center" />
        ) : error ? (
          <p className="text-center font-medium mt-2">
            Oops, lets see what just happened <br />
            <span className="text-gray-700 font-light">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article?.summary && (
            <div className="flex flex-col gap-6">
              <h3 className="text-xl text-gray-600 font-bold">
                Article <span className="text-blue-800">Summary</span>
              </h3>

              <p className="text-justify px-6 text-sm font-medium text-gray-500">
                {article.summary}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Summarize;
