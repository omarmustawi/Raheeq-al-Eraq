import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WindowSizeProvider } from "@/Contexts/WindowWidthContext";
import { IsOpenContactProvider } from "@/Contexts/IsOpenContact";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>شركة رحيق العراق</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/logo.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.ico" />{" "}
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="تقوم الشركة بكافة الأمور اللازمة في التخليص الجمركي للاستيراد. نقوم بعمل تخليص جمركي لكافة أنواع البضائع سواء البسيطة أو القيمة."
        />
      </Head>{" "}
      <IsOpenContactProvider>
        <WindowSizeProvider>
          <Component {...pageProps} />
        </WindowSizeProvider>
      </IsOpenContactProvider>
    </>
  );
}
