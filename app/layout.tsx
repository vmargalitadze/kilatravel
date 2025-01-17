import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "kila",
  description: "kila",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  // const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* <NextIntlClientProvider
          messages={messages}
          > */}
         <Providers>

        <Header />
        {children}
 <Footer />
         </Providers>
         {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
