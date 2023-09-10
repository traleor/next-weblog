import {
  Montserrat,
  Libre_Baskerville,
  Source_Code_Pro,
} from "next/font/google";

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--montserrat",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif",
  ],
});

export const libre = Libre_Baskerville({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--libre",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

export const source_code = Source_Code_Pro({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--source-code",
  fallback: [
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
