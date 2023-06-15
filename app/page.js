import { HomePage } from "@/components/home";
import Image from "next/image";
import Link from "next/link";

export const meta = () => (
  <meta
    name="description"
    content="A collection of the best free Tailwind CSS Hero Patterns"
  />
);

export default async function Home() {
  // /category/all"
  const res = await fetch(
    "https://api-vande-rastra.vercel.app/api/v1/category/all",
    {
      cache: "no-store",
    }
  );

  let data = await res.json();
  data = data.categorys;
  const news = await fetch(
    "https://api-vande-rastra.vercel.app/api/v1/newsmanagement/all",
    {
      cache: "no-store",
    }
  );
  let newsData = await news.json();
  newsData = newsData.data;

  return (
    <div className="flex justify-center items-center">
      <HomePage allCategories={data} allNews={newsData} />
    </div>
  );
}
