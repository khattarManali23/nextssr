/* eslint-disable @next/next/no-sync-scripts */
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/system";
import { AppSnackBar, LoadingScreen } from "@/components/basics";
import { NavbarFooterLayout } from "@/components/layouts";
import useDeviceType from "@/custom-hooks/useDeviceType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  const [userVisit, setUserVisit] = useState(false);
  useEffect(() => {
    const visitValue = window.localStorage.getItem("userVisit");
    if (visitValue == "true") {
      setUserVisit(true);
    } else {
      setUserVisit(false);
    }
  }, []);
  function handleChangeUserVisit() {
    window.localStorage.setItem("userVisit", true);
    setUserVisit(true);
  }
  return (
    <html lang="en">
      <head>
        <script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y0MJBV6WCF`}
        />

        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());


    gtag('config', 'G-Y0MJBV6WCF', {
      page_path: window.location.pathname,
    });
    `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND5K6VT"
            height="0"
            width="0"
            style={{
              display: "none",

              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
      </head>

      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider>
              <div>
                <NavbarFooterLayout>{children}</NavbarFooterLayout>
              </div>

              <AppSnackBar />
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
