import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta name="description" content="Green Life Power Solution - Authorized distributor of solar products in Pune. We provide solar heaters, solar electricity, and expert guidance under government schemes." />
        <meta name="keywords" content="Solar energy, Solar heaters, Solar electricity, Green Life Power Solution, Renewable energy, Pune" />
        <meta name="author" content="Green Life Power Solution" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Green Life Power Solution - Solar Energy Experts" />
        <meta property="og:description" content="We provide expert solutions for solar energy including solar heaters and electricity. Authorized distributor in Pune with 7+ years of experience." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.greenlifepowersolution.in" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{margin:0 , padding:0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
