/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useGetAllNews } from "../../services/news";

function TredingNews() {
  const [color, setColor] = useState("");

  const { data, isError, isLoading } = useGetAllNews();
  //  select random 6 news from data
  const randomNews = data
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 6);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };
  console.log(`bg-[${generateRandomColor()}]`, "color");

  return (
    <div className="w-full flex justify-center items-center font-sans">
      <div class="w-[85%] mx-auto p-5 sm:p-10 md:p-16">
        <div class="border-b mb-5 flex justify-between text-sm">
          <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" class="font-semibold inline-block">
              Trending News
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 font-sans sm:grid-cols-2">
          {randomNews?.map((item, index) => {
            return (
              <div
                class="rounded overflow-hidden sm:my-2 flex justify-between items-center "
                key={index}
              >
                <a href="#">
                  <div class="relative">
                    <img
                      class="sm:w-36 sm:h-36 w-20 h-20 object-cover"
                      src={item?.attach_file}
                      alt="Sunset in the mountains"
                    />
                  </div>
                </a>
                <div class="px-6 w-full h-full py-4">
                  <div className="w-full max-w-fit">
                    <div
                      class={`  sm:text-lg   transition duration-500 ease-in-out px-[0.4rem] py-1 font-sm w-fit
                                  font-semibold text-sm text-white flex text-center justify-center cursor-pointer font-sans capitalize`}
                      style={{ backgroundColor: generateRandomColor() }}
                    >
                      {item?.categorySlug}
                    </div>
                  </div>
                  <a
                    href="#"
                    class="font-semibold sm:text-lg  inline-block text-xs transition duration-500 ease-in-out my-2"
                  >
                    {/* {item?.title} */}
                    {/* AFTER 30 WORDS TRUNCATE IT THR TIRLE */}
                    {item?.title.split(" ").slice(0, 25).join(" ")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TredingNews;
