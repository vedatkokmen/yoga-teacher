import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Soul Sanctuary by Tyas</title>
        <meta
          name="description"
          content="Welcome to the Soul Sanctuary. I'm Tyas - a committed and passionate international yoga teacher, eclectic lifestyle muse, life coach and entrepreneur."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-1 md:grid-cols-2 h-screen ">
          <div className="md:h-screen relative">
            <Image src="/3.jpg" alt="Tyas" layout="fill" objectFit="cover" />
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
              <h1 className="text-3xl uppercase">TYAS</h1>
              <p className="font-semibold mb-5">Yoga Teacher</p>
              <p>
                Namaste loves,
                <br />
                I am Tyas, a dedicated soulful yoga teacher, presenting to you
                an online shala and a safe space for your soul to return home, a
                home within. Together, we will discover so much about yourself
                through the grace of yoga. In each practice, we will invite
                flexibility and strength that is more than just bodily, but
                beyond. Yogasana or postures are just the tools to get you to
                the revelation of how amazingly powerful you and your body can
                be.
                <br />
                My intention is to bring awareness of self-love and
                self-excellence through yoga. To eventually discover that you
                are a part of something greater, a micro universe, await to be
                awaken. To get connected to the macro universe. Therefore, you
                can live your life fully and make your soul genuinely happy.
                <br />
                Let&apos;s dive in.
              </p>
              <Link href="mailto:namastetyas@gmail.com" passHref>
                <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
