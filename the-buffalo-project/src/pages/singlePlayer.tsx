import { type NextPage } from "next";
import Image from "next/image";

const SinglePlayer: NextPage = () => {
  return (
    <>
      <main className="min-h-screen justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex justify-between px-6 py-4 text-white">
          <div>
            <h3 className="pb-2">Bet:</h3>
            <h3>Chips:</h3>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex  justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
            >
              <span>login</span>
            </button>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center">
            <div className="m-2 pb-10">
              <Image src="/spades_ace.svg" alt="logo" width={70} height={80} />
            </div>
            <div className="m-2">
              <Image src="/spades_king.svg" alt="logo" width={70} height={80} />
            </div>
            <div className="m-2">
              <Image src="/spades_king.svg" alt="logo" width={70} height={80} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="m-2">
              <Image src="/spades_ace.svg" alt="logo" width={70} height={80} />
            </div>
            <div className="m-2">
              <Image src="/spades_king.svg" alt="logo" width={70} height={80} />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center pb-6">
          <button
            type="submit"
            className="group relative flex w-1/3 justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
          >
            <span>Deal</span>
          </button>
        </div>
        <div className="flex">
          <div className="p-2">
            <button
              type="submit"
              className="group relative flex w-[100px] justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
            >
              <span>Hit</span>
            </button>
          </div>
          <div className="p-2">
            <button
              type="submit"
              className="group relative flex w-[100px] justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
            >
              <span>Stand</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePlayer;
