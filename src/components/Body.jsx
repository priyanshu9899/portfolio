import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Tech from './Tech'
import Footer from "./Footer";

function Body() {
  return (
    <>
        <div className=' bg-zinc-900 h-full w-full flex items-center justify-center  px-[3vw] pt-20 gap-12  p-4 flex-wrap relative'>
            <div className="h-[400px] w-[800px] ">
                <h1 className="heading-area px-2 text-5xl max-xl:text-[8.5vw]">Software Engineer , Full Stack Web Developer and a Problem Solver !</h1>
                <div className="py-8 px-3 text-base leading-relaxed max-xl:text-[4vw] text-zinc-400 tracking-tighter ">
                    <p className="text-wrap: wrap text-cyan-500">I&apos;m a Software Engineer skilled in building functional user interfaces,<br/>robust backends and develop & deploy them scalably.
                I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.
                I excel at designing solutions that are both effective and suited to your individual situation.</p>
                </div>
                <div className="px-3 py-2">
                    <ul className="flex xl:gap-5 max-xl:gap-[3vw] text-base text-zinc-300 flex-wrap max-xl:text-sm ">
                        <li>
                            <a href="https://github.com/priyanshu9899" className="flex justifu-center gap-1 hover:underline hover:text-zinc-500">
                                <FaGithub className="max-xl:w-4 xl:w-5 xl:h-5  max-xl:h-4   " />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Priyans9899" className="flex justify-center gap-1 hover:underline hover:text-zinc-500">
                                <BsTwitterX className="max-xl:w-4 xl:w-5 xl:h-5  max-xl:h-4 "  />
                                <span>X</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/priyanshu-kumar-sinha-17a7001b7/" className="flex justify-center gap-1 hover:underline hover:text-zinc-500">
                                <FaLinkedin className="max-xl:w-4 xl:w-5 xl:h-5  max-xl:h-4 "  />
                                <span>Linkedin</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/u/Priyanshu_Kumar_Sinha/" className="flex gap-1 justify-center hover:underline hover:text-zinc-500">
                                <SiLeetcode className="max-xl:w-4 xl:w-5 xl:h-5  max-xl:h-4 "  />
                                <span>Leetcode</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="h-[400px] w-[450px] max-xl:h-[320px] ">
                <img className='max-xl:mt-[8vw] px-[2vw] ' src="/main.png" alt="" />
            </div>
            <Tech />
        </div>
        <Footer />
    </>
  )
}

export default Body