import { Skeleton } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

export default function HomeNews({ newsAllData = [], newsLoading }) {
  const { push } = useRouter();

  const newarray = newsAllData?.slice(1, 5);

  const handlepush = (id) => {
    console.log(id, "id");
    push(`/news/detail/${id}`);
  };

  return (
    <div className="flex justify-center w-full text-center   font-sans">
      <div className="container md:mt-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {newsLoading ? (
            <div className="w-full p-4">
              <Skeleton className="h-[500px] w-full" variant="rectangular" />
              <Skeleton className="h-6 w-full my-3" variant="rectangular" />
              <Skeleton className="h-6 w-full my-3" variant="rectangular" />
              <div className="flex">
                <Skeleton className="h-6 w-32 mr-2" variant="rectangular" />
                <Skeleton className="h-6 w-32 mx-2" variant="rectangular" />
              </div>
            </div>
          ) : (
            <div
              className="p-4 hoverline mb-8 cursor-pointer"
              // onClick={() => handlepush(newsAllData[0]?.seoSlug)}
            >
              {console.log(newsAllData[0], "newsAllData[0]")}
              <div className="relative aspect-square w-full p-4 overflow-hidden">
                <Image
                  fill
                  loading="lazy"
                  src={newsAllData[0]?.attach_file}
                  className="w-full h-full hover:scale-110 overflow-hidden object-cover transition-all duration-500"
                  alt="Sample image"
                />
              </div>

              <div className="flex text-left w-full">
                <a className=" text-3xl font-bold my-3.5 leading-10   tracking-wide  overflow-hidden ">
                  <span className="">{newsAllData[0]?.title}</span>
                </a>
              </div>

              <div className="flex w-full text-center">
                <div className="mr-4 flex items-center">
                  {moment(newsAllData[0]?.created_at).format("MMM DD, YYYY")}
                </div>
              </div>
            </div>
          )}

          <div className="p-4">
            <div className="flex w-full justify-between items-center mt-[-40px]">
              <h4 className="lg:text-3xl md:text-2xl font-extrabold  font-sans">
                Recent News
              </h4>
              <div className="">
                <h4 className="singleline lg:text-lg md:text-md font-bold">
                  ALL RECENT NEWS
                </h4>
              </div>
            </div>

            {newarray?.map((item, index) => {
              return (
                <div key={index}>
                  {newsLoading ? (
                    <div className="flex mb-4">
                      <div className="w-1/4">
                        <Skeleton
                          className="h-36 w-full"
                          variant="rectangular"
                        />
                      </div>
                      <div className="ml-8 w-3/4">
                        <Skeleton className="h-6 w-32" variant="rectangular" />
                        <Skeleton
                          className="h-6 w-full my-3"
                          variant="rectangular"
                        />
                        <Skeleton
                          className="h-6 w-full my-3"
                          variant="rectangular"
                        />
                        <div className="flex">
                          <Skeleton
                            className="h-6 w-32 mr-2"
                            variant="rectangular"
                          />
                          <Skeleton
                            className="h-6 w-32 mx-2"
                            variant="rectangular"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex mb-8 w-full hoverline">
                      <div
                        className="w-1/4 cursor-pointer"
                        onClick={() => handlepush(item?.seoSlug)}
                      >
                        {console.log(item, "item")}
                        <div className="relative aspect-square w-full p-4 overflow-hidden ">
                          <Image
                            fill
                            loading="lazy"
                            src={item?.attach_file}
                            className="hover:scale-110 overflow-hidden object-cover transition-all duration-500"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                      <div className="relative   ml-8 w-3/4">
                        <div className="w-fit ">
                          <div
                            className="px-[0.4rem] py-1 font-sm w-fit
                                  font-semibold text-sm text-white flex text-center justify-center cursor-pointer font-sans capitalize"
                            style={{
                              backgroundColor:
                                index % 2 == 0
                                  ? index % 4 == 0
                                    ? index % 3 == 0
                                      ? "#5856d5"
                                      : "#5ac8fa"
                                    : "#4cd965"
                                  : "#ff4f00",
                            }}
                            onClick={() => push(`/news/${item?.categorySlug}`)}
                          >
                            {item.categorySlug}
                          </div>
                        </div>

                        <div
                          className="flex text-justify w-full  my-4 cursor-pointer"
                          onClick={() => handlepush(item?.seoSlug)}
                        >
                          <a
                            className={` text-base  leading-6 font-bold font-sans tracking-wide  overflow-hidden `}
                          >
                            <span className="">
                              {item?.title.split(" ").length > 23
                                ? item?.title
                                    .split(" ")
                                    .slice(0, 20)
                                    .join(" ") + "..."
                                : item?.title}
                            </span>
                          </a>
                        </div>

                        <div className="flex w-full text-center ">
                          <div className="mr-4 flex items-center">
                            {moment(item.created_at).format("MMM DD, YYYY")}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
