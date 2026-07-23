import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import LayoutClient from "./LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#20C677",
};

export const metadata = {
  title: "CoinSwitch",
  description: "CoinSwitch is the most trustable exchange partner. Exchange more, earn more!",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CoinSwitch",
  },
  icons: {
    icon: [
      { url: "/image/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/image/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/coinswitch_icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/image/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  verification: {
    google: "WJJgbZoAjQ2OYURThYg5MzQzF8ZIpJwIfitC2E_t6Fg",
  }
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA & Mobile Meta Tags */}
        <meta name="theme-color" content="#20C677" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CoinSwitch" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/image/apple-touch-icon.png" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400..700&display=swap"
          rel="stylesheet"
        />

        {/* Styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" type="text/css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Ads + GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17922858127"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17922858127');
            gtag('config', 'G-SGHVYRBG7S');
          `}
        </Script>

        {/* PWA Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(
                  function(registration) {
                    console.log('PWA ServiceWorker registered with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('PWA ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>


        <LayoutClient>{children}</LayoutClient>

        {/* JS Libraries */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
