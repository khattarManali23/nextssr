import NewsPage from "@/sections/NewList";

export default async function Page({ params }) {
  const res = await fetch(
    `https://api-vande-rastra.vercel.app/api/v1/newsmanagement/allByCategory/${params.page}`,
    {
      cache: "no-store",
    }
  );
  let data = await res.json();
  data = data.data;

  return (
    <div className="w-full flex justify-center items-center">
      <NewsPage data={data} />
    </div>
  );
}

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const category = await fetch(
    "https://api-vande-rastra.vercel.app/api/v1/category/all"
  ).then((res) => res.json());
  let categoryData = category.categorys;

  categoryData = categoryData.filter((item) => item.slug === params.page);

  // const previousImages = (await parent).openGraph?.images || [];
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: categoryData[0].name,
    description: categoryData[0].description,
    openGraph: {
      title: categoryData[0].name,
      description: categoryData[0].description,
      images: [
        {
          url: categoryData[0].icon,
          width: 800,
          height: 600,
          alt: categoryData[0].name,
        },
        ...previousImages,
      ],
    },
  };
}
