import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AlertSection } from "@/components/block/AlertSection";
import { NavBar } from "@/components/block/NavBar";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const gilroyBold = localFont({
  src: [
    {
      path: "./fonts/gilroybold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});
// console.log(gilroyBold, "ssssssss");

export const metadata: Metadata = {
  title: "Attio Train",
  description: "CRM platform for conversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${gilroyBold.className}`}>
        <div className="bg-primary  mx-auto  w-11/12 flex flex-col gap-10">
          <div className="flex md:flex-col  flex-col-reverse">
            <AlertSection>
              <p className=" ml-auto">
                Weve raised a $23.5m Series A led by Redpoint Ventures!
                <a href="#" className="ml-4 underline">
                  Read more
                </a>
              </p>
            </AlertSection>
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
