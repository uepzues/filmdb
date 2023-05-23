import "./globals.css";
import { Labrada } from "next/font/google";

const inter = Labrada({ subsets: ["latin"] });

export const metadata = {
  title: "FilmDB",
  description: "IMDB clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
