import NewsDetailPage from "@/sections/NewsDetailPage";
import Image from "next/image";
import React from "react";

export default async function Page({ params }) {
  const res = await fetch(
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/oneBySlug/${params.news}`,
    {
      cache: "no-store",
    }
  );
  let data = await res.json();
  data = data.data;

  return (
    <div className="">
      <NewsDetailPage news={data} />
    </div>
  );
}
