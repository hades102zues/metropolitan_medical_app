import Head from "next/head";

interface Props {
  baseUrl: string;
  logoPath: string; //used for fb
  title: string;
  contentDescription: string;
  canonical: string;
  allowIndex: boolean;
  googleOwnerShipID: string;
  bingOwnerShipID: string;

  themeColor?: string; //Android theme color
}
const HtmlHead: React.FC<Props> = (props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {props.allowIndex ? null : <meta name="robots" content="noindex" />}

      {/* IOS Safari Simply rename the original touch icon to produce the precompose */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/icons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-icon-180x180.png"
      />
      {/* <link rel="apple-touch-icon-precomposed" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon-precomposed.png" />  */}

      {/* //Android Chrome */}
      <link rel="manifest" href="/icons/manifest.json" />
      {/* Android home screen */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/android-icon-192x192.png"
      />

      {/*macOS Safari */}
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#00ad26"
      />

      {/* IE and Edge */}
      {/* <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="msapplication-config" content="%PUBLIC_URL%/browserconfig.xml" />  */}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* Legacy Browsers */}

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />

      {/* To show icon in search results. NOTE*** the favicon.ico must be a multiple of 48x48 OR IT WILL NOT SHOW IN RESULTS */}
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />

      {/* Site Ownership */}
      <meta
        name="google-site-verification"
        content={props.googleOwnerShipID ? props.googleOwnerShipID : ""}
      />
      <meta
        name="msvalidate.01"
        content={props.bingOwnerShipID ? props.bingOwnerShipID : ""}
      />

      <link rel="canonical" href={props.canonical} />
      <meta name="description" content={props.contentDescription} />

      <meta property="og:url" content={props.canonical} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.contentDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={props.baseUrl + props.logoPath} />

      {/* <meta name="robots" content="noindex" /> */}

      {props.themeColor ? (
        <meta name="theme-color" content={props.themeColor} />
      ) : null}

      <title>{props.title}</title>
    </Head>
  );
};

export default HtmlHead;
