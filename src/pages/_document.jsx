import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css"
        />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
