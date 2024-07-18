import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaGithub, FaLink } from "react-icons/fa";
import LazyLoad from "react-lazyload";

function Dyslexify() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] relative flex flex-col">
        <div className="flex-grow flex justify-center items-center">
          <div className="max-xl:h-full max-xl:w-[90vw] h-[80vh] w-[50vw] pt-20">
            <div className="flex">
              <h1 className="heading-area text-6xl max-xl:text-5xl flex text-wrap items-center">
                Dyslexify AI
              </h1>
              <div className="ml-auto flex items-center gap-x-6 max-xl:gap-x-1 max-xl:flex-col gap-y-2 justify-center">
                <a
                  className="border rounded-md text-xl flex items-center gap-x-2 p-2 hover:bg-white hover:text-black"
                  href=""
                >
                  Github
                  <FaGithub />
                </a>
                <a
                  className="border rounded-md text-xl flex items-center gap-x-2 p-2 hover:bg-white hover:text-black"
                  href=""
                >
                  Live
                  <FaLink />
                </a>
              </div>
            </div>
            <div className="h-[50vh] mt-8 rounded-2xl">
              <LazyLoad height={200} offset={100}>
                <img className="rounded-2xl" src="/dyslexifypro.png" alt="Dyslexify project screenshot" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dyslexify;
