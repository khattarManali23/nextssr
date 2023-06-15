"use client";

import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import GlobalSEO from "../../data/next-seo.data";
import { useGetAllCategories } from "../../services/categoryServices";
import { useGetAllNews } from "../../services/news";
import { FadeIn } from "../animate";

import { ErrorScreen } from "../basics";
import TredingNews from "./TredingNews";

const DynamicHomeNews = dynamic(() => import("./HomeNews"));
const DynamicMobileHomeNews = dynamic(() => import("./MobileHomeNews"));

export default function HomePage({ allCategories, allNews }) {
  return (
    <div>
      <div className="sm:flex justify-center items-center hidden">
        <DynamicHomeNews newsAllData={allNews} />
      </div>
      <div className="sm:hidden block  ">
        <DynamicMobileHomeNews
          categories={allCategories}
          newsAllData={allNews}
        />
      </div>
      {/* <TredingNews /> */}
    </div>
  );
}
