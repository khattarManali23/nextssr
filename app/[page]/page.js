import Head from "next/head";

export default async function Page({ params }) {
  console.log(params, "params");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.page}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.body} />
        <meta name="og:title" content={data.title} />
        <meta name="og:description" content={data.body} />
        <meta name="twitter:title" content={data.title} />
      </Head>

      <div className="grid grid-cols-6 gap-x-6 gap-y-3">
        <div className="col-span-full space-y-3 lg:col-span-4">
          <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
            {data.title}
          </h1>
          <p className="font-medium text-gray-500">{data.body}</p>
        </div>
      </div>
    </>
  );
}
