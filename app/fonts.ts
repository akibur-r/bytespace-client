import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi-variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/satoshi-variable-italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  style: ["normal", "italic"],
  preload: false,
  variable: "--font-poppins",
});
