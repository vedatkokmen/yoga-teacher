import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Soul Sanctuary by Tyas</title>
        <meta
          name="description"
          content="Welcome to the Yoga Teacher. I'm Tyas Goddess - a committed and passionate international yoga teacher, eclectic lifestyle muse, life coach and entrepreneur."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero className="flex-grow" />
    </div>
  );
}
