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

export async function generateMetadata({ params, searchParams }, parent) {
  const res = await fetch(
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/oneBySlug/${params.news}`,
    {
      cache: "no-store",
    }
  );
  let data = await res.json();
  data = data.data;
  console.log(data, data);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    description: data.news_desc,
    openGraph: {
      title: data.title,
      description: data.news_desc,
      images: [
        {
          url: data.attach_file,
          width: 800,
          height: 600,
          alt: data.title,
        },
        ...previousImages,
      ],
    },
  };
}
