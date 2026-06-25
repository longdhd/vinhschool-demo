import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "VinhSchool - Luyện Thi Quốc Tịch",
  description: "Lớp luyện thi quốc tịch cho người Việt tại Quận Cam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`h-full antialiased ${beVietnam.variable}`}>
      <body className="min-h-full flex flex-col bg-stone-100 text-zinc-800">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
