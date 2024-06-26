import type { Metadata } from "next";
import { Didact_Gothic, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { ModalContextProvider } from "@/context/providers/ModalContext";
import { RandomUserProvider } from "@/context/providers/RandomUserContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
// export const didactGothic = Didact_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className + " text-slate-100 bg-[#f8f8f8]"}>
        {/* <div className="w-full bg-teal-300 flex items-center justify-center flex-col"> */}
        <div className="w-full flex items-center justify-center flex-col max-w-full overflow-x-hidden">
          <ModalContextProvider>
            <RandomUserProvider>
              <Header />
              <main className="flex flex-1 flex-col w-full min-h-screen">{children}</main>
            </RandomUserProvider>
          </ModalContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
