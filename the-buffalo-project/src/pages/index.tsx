import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buffalo Blackjack</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className=" width-2/3">
            <Image src="/logoBuff.png" alt="logo" width={500} height={500} />
          </div>
          <button
            type="submit"
            className="group relative flex w-2/3 justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
          >
            <span>Sign In</span>
          </button>

          <button
            type="submit"
            className="group relative flex w-2/3 justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
          >
            <span>Play as Guest</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
