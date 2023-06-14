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
      <body className={inter.className}>
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
