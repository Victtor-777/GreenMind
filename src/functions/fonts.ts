import { Poppins } from "next/font/google";

export const body_font = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--body-font",
});
