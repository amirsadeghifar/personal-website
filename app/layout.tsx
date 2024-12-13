import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import Script from "next/script";

const gabriella = localFont({
  src: "./fonts/gabriela-regular-webfont.woff",
  variable: "--font-gabriella",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Amir Sadeghifar",
  description: "Software engineer",
  keywords: "software engineer, web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabriella.variable}`}>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <head>
        <link rel="icon" type="image/png" href="/as-logo.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/as-logo.png" />
        <link rel="shortcut icon" href="/as-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/as-logo.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/as-logo.png" />
      </head>
      <body
        className={`antialiased max-w-[1440px] mx-auto px-[24px] md:px-[72px] lg:px-[144px] py-[36px] overflow-x-hidden`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
