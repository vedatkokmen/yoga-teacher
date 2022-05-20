import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Header />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Welcome to the Yoga Teacher. I'm Tyas Goddess - a committed and passionate international yoga teacher, eclectic lifestyle muse, life coach and entrepreneur."
        />
        <meta property="og:title" content="Tyas Goddess" />

        <meta property="og:url" content="https://mydomain.com/" />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Head>
      <main style={{}}>{children}</main>
      <Footer />
    </>
  );
}
