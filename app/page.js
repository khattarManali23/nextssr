import { HomePage } from "@/components/home";
import Image from "next/image";
import Link from "next/link";

export const SITE_URL = "https://vande-rashtra-psi.vercel.app/";
export const SITE_NAME = "vande rashtra";
export const SITE_LOGO = SITE_URL + "/logo/logo.jpeg";
export const SITE_FAVICON = SITE_URL + "favicon.ico";
export const SITE_BANNER = SITE_URL + "/logo/logo.jpeg";

export const metadata = {
  title: "Welcome to vande rashtra",
  description:
    "Your Trusted Source for Timely and Reliable News. Stay updated with the latest headlines, breaking news, and in-depth analysis from around the world. Our dedicated team of journalists brings you unbiased reporting on politics, business, technology, sports, entertainment, and more. Experience the power of knowledge with Vande Rashtra, your go-to news website for informed perspectives and comprehensive coverage. Discover the stories that matter most to you and engage in meaningful conversations. Join our community today and be part of the informed generation!",
  openGraph: {
    image: SITE_BANNER,
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    site_name: SITE_NAME,
    title: "Welcome to vande rashtra",
    description:
      "Your Trusted Source for Timely and Reliable News. Stay updated with the latest headlines, breaking news, and in-depth analysis from around the world. Our dedicated team of journalists brings you unbiased reporting on politics, business, technology, sports, entertainment, and more. Experience the power of knowledge with Vande Rashtra, your go-to news website for informed perspectives and comprehensive coverage. Discover the stories that matter most to you and engage in meaningful conversations. Join our community today and be part of the informed generation!",
    images: [
      {
        url: SITE_BANNER,
        width: 1067,
        height: 725,
        alt: SITE_NAME,
      },
    ],
  },
};

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
