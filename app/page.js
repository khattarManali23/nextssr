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

  return (
    <div className="flex">
      {data.map((num, i) => (
        <div
          key={i}
          className="flex  items-center justify-center w-full h-screen bg-gray-800"
        >
          <Link
            className="px-4 py-2 text-white bg-blue-500 rounded-md font-bold"
            href={`/${num.slug}`}
          >
            {num.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
