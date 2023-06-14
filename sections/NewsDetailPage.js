"use client";

import { FadeRight } from "@/components/animate";
import { LoadingScreen } from "@/components/basics";
import { DesktopDetail, MobileDetail } from "@/components/news";
import { useGetWhatsappLink } from "@/services/whatsappService";
import { DefaultSeo } from "next-seo";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const NewsDetailPage = ({ news }) => {
  const { data, isLoading, isError } = useGetWhatsappLink();
  const { query } = useSearchParams();
  const id = query?.id;

  return (
    <>
      <FadeRight durationTime={"1s"}>
        {/* desktop view */}
        <div className="md:block hidden">
          <DesktopDetail oneNewsData={news} data={data} />
        </div>
      </FadeRight>
      <FadeRight durationTime={"1s"}>
        {/* mobile view */}
        <div className="md:hidden">
          <MobileDetail oneNewsData={news} data={data} />
        </div>
      </FadeRight>
    </>
  );
};

export default NewsDetailPage;
