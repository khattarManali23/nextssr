import NewsPage from "@/sections/NewList";
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
      <NewsPage data={data} />
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
