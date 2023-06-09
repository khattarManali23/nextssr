import Head from "next/head";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// export const metadata = {
//   title: "My page mnali",
//   description: "This will be the page meta description",
//   // ...
// };

export default async function Page({ params }) {
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/posts/${params.page}`,
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/allByCategory/${params.page}`,
    {
      cache: "no-store",
    }
  );
  let data = await res.json();
  data = data.data;

  return (
    <>
      <div className="flex flex-wrap ">
        {data.map((num, i) => (
          <Link
            href={`/${params.page}/${num.seoSlug}`}
            key={i}
            className="w-72 m-4 flex flex-col justify-center items-center"
          >
            <Image
              src={num.attach_file}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div
              className="flex flex-col items-start justify-start w-full  font-semibold text-lg
             m-8"
            >
              {num.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/allByCategory/${params.page}`
  ).then((res) => res.json());
  const data = product.data;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data[0].title,
  };
}
