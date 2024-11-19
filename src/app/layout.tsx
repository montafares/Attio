import { Inter } from "next/font/google";
import "./globals.css";
import { AlertSection } from "@/components/block/AlertSection";
import { NavBar } from "@/components/block/NavBar";
// import Footer from "@/components/block/Footer";
// import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// const gilroyBold = localFont({
//   src: [
//     {
//       path: "../assets/fonts/gilroybold.ttf",
//       weight: "700",
//       style: "bold",
//     },
//   ],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-primary`}>
        <div className="bg-primary w-full gap-20  flex flex-col ">
          <div className="flex md:flex-col md:fixed border-4 border-red-500 z-[999] md:pt-5 w-full bg-primary gap-3 flex-col-reverse">
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
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
export function generateMetadata() {
  return {
    notFound: true, // Use this for the NotFound behavior
  };
}
