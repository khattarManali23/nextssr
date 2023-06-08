import Image from "next/image";
import React from "react";

export default async function Page({ params }) {
  console.log(params, "params");
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/posts/${params.page}`,
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/oneBySlug/${params.news}`,
    {
      cache: "no-store",
    }
  );
  let data = await res.json();
  data = data.data;
  console.log(data, "11");

  return (
    <>
      <div className="flex flex-wrap justify-start items-start">
        <div className="w-full flex flex-col justify-start items-start">
          {data.title}
        </div>
        <Image
          src={data.attach_file}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className="w-full flex flex-col justify-start items-start m-2">
          {data.descriptions.map((num, i) => (
            <div key={i} className="m-2">
              {num.news_descriptions}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
