import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import banner from "../../assets/svg/banner.jpg";
import Logo from "../../assets/svg/Screenshotlogo.png";
import { useGetAllAdvertisement } from "../../services/advertisementServices";
import { FadeIn } from "../animate";
import { AppCarousel, ErrorScreen } from "../basics";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function DesktopTopNavbar({ setpageLoading }) {
  const router = useRouter();
  const {
    data: advertisementAllData,
    isLoading: advertisementLoading,
    isError: advertisementError,
  } = useGetAllAdvertisement();

  let newArray = advertisementAllData?.filter(
    (item) =>
      item?.banner_type?.replaceAll?.(" ", "")?.toLowerCase() ==
        "headerbanner" && item?.attach_banner != ""
  );
  console.log("newArray", newArray);

  if (advertisementError) return <ErrorScreen />;

  console.log("advertisementAllData", advertisementAllData);

  return (
    <div className="py-8 flex justify-center w-full text-center">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="md:hidden lg:block">
            <div className="relative h-28 w-3/4 ml-[-8vh]">
              <Image
                fill
                loading="lazy"
                src={Logo}
                className="w-full h-full object-contain"
                alt="Sample image"
                onClick={() => router.push("/")}
              />
            </div>
          </div>

          <div className="md:col-span-3  lg:col-span-2">
            <div className="flex lg:justify-end justify-center w-full">
              <FadeIn durationTime="1s">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  showArrows={false}
                  interval={5000}
                  transitionTime={1000}
                >
                  {advertisementAllData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative h-28 w-3/4 border-2 border-red-900"
                      >
                        <Image
                          fill
                          loading="lazy"
                          src={item?.attach_banner}
                          className="w-full h-full object-cover "
                          alt="Sample image"
                          onClick={() => router.push("/")}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
