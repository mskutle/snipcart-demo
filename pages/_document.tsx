import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="no">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js"
          ></script>
          <div
            id="snipcart"
            data-api-key="MTVjMjZhY2QtNDUyMS00MGE2LTkxOTItMWY1ZTc3NDYxOTk0NjM3NDI1NzkwODk5MjM1MjYy"
            hidden
          ></div>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
