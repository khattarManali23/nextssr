import { Box, Grid, Skeleton } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useGetAllAdvertisement } from "../../services/advertisementServices";
import { useGetAllCategories } from "../../services/categoryServices";
import { useGetAllNews } from "../../services/news";
import PicOne from "../../assets/svg/Screenshot.png";
import { NewsDetail } from "../../data/NewsDetail";
import { FadeIn } from "../animate";
import { AppCarousel, ErrorScreen } from "../basics";
import CategoriesBaseCard from "../home/CategoriesBaseCard";
import {
  FacebookShareButton,
  InstagramShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const DesktopDetail = ({ oneNewsData = {}, data }) => {
  const { push } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [openTab, setOpenTab] = useState("Home");
  const router = useRouter();
  const currentUrl = router.asPath;
  console.log(currentUrl, "currentUrl");
  const {
    title,
    descriptions,
    created_at,
    attach_file,
    seoTags,
    categorySlug,
  } = oneNewsData;

  let edited = descriptions?.map((item) => {
    return {
      ...item,
      news_desc: item?.news_descriptions.split("/BR"),
    };
  });

  edited = edited?.flat();

  edited = edited?.map((item) => {
    if (item?.news_desc[0]?.startsWith("\n\n")) {
      return {
        ...item,
        news_desc: item?.news_desc[0]?.replace("\n\n", "").flat(),
      };
    } else if (item?.news_desc[0]?.startsWith(" \n\n")) {
      return {
        ...item,
        news_desc: item?.news_desc[0]?.replace(" \n\n", ""),
      };
    } else if (item?.news_desc[0]?.startsWith("\n")) {
      return {
        ...item,
        news_desc: item?.news_desc[0]?.replace("\n", ""),
      };
    } else if (item?.news_desc[0]?.startsWith(" \n")) {
      return {
        ...item,
        news_desc: item?.news_desc[0]?.replace(" \n", ""),
      };
    } else {
      return item;
    }
  });
  const {
    data: newsAllData,
    isLoading: newsAllLoading,
    isError: newsError,
  } = useGetAllNews();

  const {
    data: categoriesAllData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetAllCategories();

  const changeNavbarShadow = () => {
    if (window.scrollY >= 63) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarShadow);
  }, [scrolled]);

  let relatedNews = newsAllData?.filter(
    (item) => item?.categorySlug == categorySlug
  );

  if (newsError || categoriesError) return <ErrorScreen />;

  const filterCardData = (slug) => {
    push(`/news/${slug}`);
  };

  return (
    <>
      <div
        className={`
             ${
               scrolled === true
                 ? `top-0 sticky shadow-shadow-primary scroll-smooth`
                 : `top-40`
             }
              bg-white py-2  z-20`}
      >
        <div className="mx-4 ">
          <div
            className="flex flex-row
             gap-y-2 overflow-scroll"
          >
            <div
              className={`flex justify-center text-sm uppercase  w-54 items-center font-medium
                 ${
                   openTab == "Home"
                     ? "tab_button_active py-2 px-4"
                     : "tab_button py-2 px-4"
                 }`}
            >
              Home
            </div>

            {categoriesAllData?.map((item, index) => {
              return (
                <>
                  {categoriesLoading ? (
                    <div className="">
                      <Skeleton className="h-10 w-32 mx-3" />
                    </div>
                  ) : (
                    <div
                      key={index}
                      onClick={() => filterCardData(item?.slug)}
                      className={`flex justify-center text-sm items-center font-medium ${
                        openTab == item?.slug
                          ? "tab_button_active   py-2 px-4"
                          : "tab_button py-2  px-4"
                      }`}
                    >
                      <span className="  whitespace-nowrap">{item?.name}</span>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>

      <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
          <div
            className="bg-[#F9F9F9] flex justify-center items-center text-start pt-8 pb-8
          md:mt-0 mt-[-2px] md:pt-16 md:pb-16  w-full"
          >
            <div className="container    overflow-hidden">
              <h1
                className="text-3xl md:text-xl mt-0 mb-0
                        px-4 md:px-0  tracking-normal text-slate-700 leading-[2.3rem] md:leading-10"
              >
                {title}
              </h1>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="mx-auto my-10 container">
        <div class="grid lg:grid-cols-7 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-8 lg:gap-8">
          <div
            className="lg:col-span-5 md:col-span-4 px-4 md:px-0"
            item
            lg={9}
            md={9}
            sm={12}
          >
            <div className="absolute z-10 mt-5 flex flex-col items-center bg-gray-200 px-4 py-2">
              <div className="">
                <span className="text-lg font-semibold text-theme-primary-main">
                  {moment(created_at).format("MMM")}
                </span>
                <br />
                <span className="text-base font-medium text-slate-800">
                  {moment(created_at).format("DD")}
                </span>
              </div>
            </div>

            <div className="relative h-auto w-full animate-opacityAnimation">
              <Image
                height={1000}
                width={1000}
                alt="alt"
                src={attach_file}
                loading="lazy"
                className="w-full h-auto object-covor"
              />
            </div>

            {edited?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="text-lg font-normal 
                    flex md:text-justify text-left  leading- cursor-pointer font-sans"
                  >
                    <p className="mb-0 text-left md:text-justify" key={index}>
                      {item?.news_desc}
                    </p>

                    {item?.facebook_link && (
                      <div class="container">
                        <iframe
                          src={`https://www.facebook.com/plugins/post.php?href=${item?.facebook_link}&width=1200&show_text=true&height=520&appId`}
                          style={{
                            border: "none",
                            overflow: "hidden",
                            height: "650px",
                            width: "100%",
                          }}
                          scrolling="no"
                          frameborder="0"
                          allowfullscreen="true"
                        ></iframe>
                      </div>
                    )}
                    <div className="flex justify-center items-center">
                      {item?.instagram_link && (
                        <iframe
                          src={`https://www.instagram.com/p/${
                            item?.instagram_link?.split("/")[4]
                          }/embed`}
                          style={{
                            border: "none",
                            overflow: "clip",
                            height: "650px",
                            width: "100%",
                          }}
                          scrolling="no"
                          frameborder="0"
                        ></iframe>
                      )}
                    </div>
                    {item?.youtube_link && (
                      <iframe
                        src={item.youtube_link}
                        style={{
                          border: "none",
                          overflow: "hidden",
                          height: "650px",
                          width: "100%",
                        }}
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen="true"
                      ></iframe>
                    )}
                  </div>
                </>
              );
            })}

            <div
              className="text-lg font-semibold
                    leading-6 tracking-normal
                     md:text-xl md:leading-7 capitalize mt-[15px]"
            >
              Tags
            </div>

            <>
              {seoTags?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative mr-2 mb-2 inline-block bg-slate-100 mt-[10px]
                         px-3 py-2 align-top text-sm capitalize text-gray opacity-60 "
                  >
                    {item}
                  </div>
                );
              })}
            </>

            <Box className="flex items-center py-4">
              <FacebookShareButton
                url={`https://www.vanderashtra.com/${currentUrl}`}
              >
                <BsFacebook size={40} className="m-2" />
              </FacebookShareButton>

              <TwitterShareButton
                url={`https://www.vanderashtra.com/${currentUrl}`}
              >
                <BsTwitter size={40} className="m-2" />
              </TwitterShareButton>

              <WhatsappShareButton
                url={`https://www.vanderashtra.com/${currentUrl}`}
              >
                <BsWhatsapp size={40} className="m-2" />
              </WhatsappShareButton>
            </Box>

            <div className="pt-0 md:pt-4 pb-4 ">
              <div className="h-[115px] md:h-[250px] md:w-3/4 w-full">
                <div className="relative py-4 w-full h-full border-2 border-red">
                  <Image
                    fill
                    alt="alt"
                    src={PicOne}
                    loading="lazy"
                    onClick={() => {
                      window.open(data[0]?.link, "_blank");
                    }}
                    className="object-covor"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 md:px-0 px-4 mt-6 md:mt-0 ">
            <OtherData newsAllData={relatedNews} />
          </div>
        </div>
      </div>
      <div className="mt-[-20px]">
        <CategoriesBaseCard
          cardData={relatedNews}
          newsLoading={newsAllLoading}
        />
      </div>
    </>
  );
};
export default DesktopDetail;

export const OtherData = ({ newsAllData = [] }) => {
  const { push } = useRouter();
  const {
    data: advertisementAllData,
    isLoading: advertisementLoading,
    isError: advertisementError,
  } = useGetAllAdvertisement();

  let newArray = advertisementAllData?.filter(
    (item) =>
      item?.banner_type?.replaceAll?.(" ", "")?.toLowerCase() ==
        "detailbanner" && item?.attach_banner != ""
  );

  if (advertisementLoading) {
    return <Skeleton className="h-full w-full" variant="rectangular" />;
  }

  if (advertisementError) return <ErrorScreen />;

  const handlepush = (id) => {
    push(`/news/detail/${id}`);
  };

  return (
    <Box>
      <Box>
        <div className="m-auto overflow-hidden">
          {advertisementLoading ? (
            <Skeleton className="h-60 md:h-80 w-full" variant="rectangular" />
          ) : (
            <AppCarousel
              {...{
                slidesToShow: 1,
                fade: false,
                autoplay: true,
                infinite: NewsDetail?.length > 1 ? true : false,
                // autoplaySpped: 1000,
                autoplaySpeed: 2000,
              }}
            >
              {advertisementAllData?.map((item, index) => {
                return (
                  <div key={index} className="max-h-fit">
                    <FadeIn durationTime="1s">
                      <div className="relative aspect-square w-full">
                        <Image
                          fill
                          src={item?.attach_banner}
                          className="w-full animate-opacityAnimation object-cover"
                          alt={item?.title}
                        />
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </AppCarousel>
          )}
        </div>

        <div
          className="text-lg font-semibold
                    leading-6 tracking-normal
                     md:text-xl md:leading-7 capitalize mt-[15px] text-start"
        >
          other post
        </div>
      </Box>
    </Box>
  );
};
