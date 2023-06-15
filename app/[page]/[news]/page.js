import NewsDetailPage from "@/sections/NewsDetailPage";
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
    <div className="">
      <NewsDetailPage news={data} />
    </div>
  );
}
