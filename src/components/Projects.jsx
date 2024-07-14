import Footer from './Footer'
import Navbar from './Navbar'

function Projects() {
  return (
    <div className=' w-full h-full relative '>
        <Navbar/>
        <div className=' px-12 pt-16 max-xl:px-[6vw]'>
          <h1 className='heading-area text-4xl mb-5 text-cyan-400'>Projects</h1>
          <p className='tracking-tighter leading-tight text-base text-[18px] xl:w-3/4 text-zinc-400'>I&apos;ve worked on these few projects over the years.
             All of them are open-source, so if you see something that piques your interest, check out the code and contribute 
             if you have ideas on how it can be improved.</p>
        </div>
        <div className=' w-full max-xl:px-[6vw] py-12  px-12 flex max-xl:items-center max-xl:justify-center gap-12 flex-wrap'>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div> {/*have to remove height after filling content */}
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
        </div>
        <div className=' px-12 pt-16 max-xl:pt-12 max-xl:px-[6vw]'>
          <h1 className='heading-area text-4xl mb-5 text-cyan-400'> Practice Projects</h1>
          <p className='tracking-tighter leading-tight text-base text-[18px] xl:w-3/4 text-zinc-400'>
          These are some of the practice projects I have completed while learning fundamental and essential concepts. 
          Each of these projects is close to my heart as they represent significant steps in my learning journey. 
          By working on these projects, I have gained invaluable insights and practical knowledge that have shaped my growth as a developer.</p>
        </div>
        <div className=' w-full max-xl:px-[6vw] py-12  px-12 flex max-xl:items-center max-xl:justify-center gap-12 flex-wrap'>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
          <div className='w-[45vh] h-[20vh] rounded-3xl bg-zinc-800'></div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects;