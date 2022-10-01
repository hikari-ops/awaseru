import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <svg id="texture" width="100%" height="100%" className="noise_effect">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="10"
              stitchTiles="stitch"
            ></feTurbulence>
            //https://fecolormatrix.com/
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
