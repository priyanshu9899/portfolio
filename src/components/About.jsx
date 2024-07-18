import { FaFilePdf } from "react-icons/fa6";
import Navbar from './Navbar';
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";
import LazyLoad from "react-lazyload";

function About() {
  return (
    <div className='h-[100vh] w-full relative bg-zinc-900'>
      <Navbar />
      <div className='w-full flex gap-12 gap-x-40 justify-center items-center flex-wrap px-[3vw] pt-20 '>
        <div className='h-[450px] max-xl:h-[650px] w-[850px] max-xl:order-2 '>
          <div className='mb-10 heading-area text-4xl max-xl:text-[7vw] tracking-tighter'>
            Hey, I&apos;m <span className='text-cyan-400'>Priyanshu</span> Kumar Sinha
          </div>
          <p className='tracking-tighter text-zinc-400 text-[16px] max-xl:text-[4vw] max-xl:leading-relaxed'>
            I&apos;m a college student from Jamshedpur currently residing in Chennai, passionate about becoming a full stack web developer.
            With a focus on creating intuitive applications, I leverage technologies like React, Node.js, and MongoDB to build scalable solutions. My enthusiasm for problem-solving,
            especially in Data Structures and Algorithms (DSA), drives me to optimize solutions for efficiency and performance. Beyond coding, I actively pursue opportunities to expand my skills,
            ensuring a well-rounded approach to software development.
          </p>
          <div className='tracking-tighter xl:mt-20 mt-8 rounded-[20px]'>
            <p className='px-4 bg-cyan-700 rounded-[20px] max-xl:text-[4vw] text-zinc-200 text-[17px] p-3'>
              If you ever spot me in the wild, don&apos;t hesitate to say hello! Let&apos;s grab a drink and geek-out over the latest advancements
              in full-stack development or discuss the new trending topic in 0-1 world. ✨
            </p>
          </div>
        </div>
        <div className='h-[450px] max-xl:h-[500px] w-[300px] flex-col flex max-xl:order-1 '>
          <div className="relative group">
            <div className='absolute -inset-1 bg-cyan-400 rounded-[30px] max-xl:opacity-50 opacity-65 blur-xl transition duration-1000 xl:group-hover:opacity-100 group-hover:duration-300'></div>
            <LazyLoad height={450} offset={100}>
              <img className='h-[450px] flex items-center justify-center rounded-[30px] relative' src="/profile.jpg" alt="Profile" />
            </LazyLoad>
          </div>
          <div className='mt-7 flex items-center justify-center p-2 mx-1 font-bold bg-slate-800 text-red-600 rounded-md'>
            <a className='flex items-center gap-2' href="https://drive.google.com/file/d/13bjMJgK1FJ27og-eEeh8Szpt2ZVtlrmk/view?usp=drive_link">View Resume <FaFilePdf /></a>
          </div>
        </div>
        <div className='w-full max-xl:order-3'>
          <Experience />
        </div>
        <div className='w-full max-xl:order-4'>
          <Education />
        </div>
      </div>  
      <Footer />
    </div>
  );
}

export default About;
