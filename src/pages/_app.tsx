import "@/styles/globals.css";
import 'tailwindcss/tailwind.css';
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WindowSizeProvider } from "@/Contexts/WindowWidthContext";
import { IsOpenContactProvider } from "@/Contexts/IsOpenContact";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <IsOpenContactProvider>
      <WindowSizeProvider>
        <Component {...pageProps} />
      </WindowSizeProvider>
    </IsOpenContactProvider>
  );
}
