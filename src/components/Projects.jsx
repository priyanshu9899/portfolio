import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Projects() {

  const ProjectList = [
    {
      link: "/dyslexify",
      heading:"Dyslexify AI",
      description:"A speech summarising extension made with multiple AI models. It can summarise whole webpage in just 4 lines which saves your time and can be helpful for those who are suffering from dyslexia.",
      imgSrc:"/dyslexify.png"
    },
    {
      link:"/new",
      heading:"Coming Soon...",
      description:"Currently working on this project, stay tuned for this one !!",
      imgSrc:"/loading.jpg"
    }
  ]

  const PracticeProjectList = [
    {
      heading:"Music Player",
      description:"Basically a spotfy clone but having extra features for free such as download option , skip and fast-forward songs.",
      imgSrc:"/music.png"
    },
    {
      heading:"Note Me",
      description:"A note taking app made with ejs and express.js [backend], You can do all CRUD(create , read , update and delete) operations in this . ",
      imgSrc:"/note.avif"
    },
    {
      heading:"Password Generator",
      description:"This was made by me while learning states and hooks in React , you can use this to generate password of any length with the characters of your choice.",
      imgSrc:"/password.png"
    }
  ]


  return (
    <div className=' w-full h-full relative '>
        <Navbar/>
        <div className=' px-12 pt-16 max-xl:px-[6vw] '>
          <h1 className='heading-area text-4xl mb-5 text-cyan-400'>Projects</h1>
          <p className='tracking-tighter leading-tight text-base text-[18px] xl:w-3/4 text-zinc-400'>I&apos;ve worked on these few projects over the years.
             All of them are open-source, so if you see something that piques your interest, check out the code and contribute 
             if you have ideas on how it can be improved.</p>
        </div>
        <div className='w-full max-xl:px-[6vw] py-12 px-12 flex max-xl:items-center max-xl:justify-center gap-12 flex-wrap'>
          {ProjectList.map((item, index) => (
            <Link key={index} to={item.link}>
              <div className='w-[400px] max-xl:w-[360px] px-1 h-full rounded-3xl bg-zinc-800 flex justify-center hover:border hover:border-cyan-400 '>
                <div className='w-[80px] rounded-l-3xl mx-1 flex items-center justify-center'>
                  <img className='w-[60px] h-[60px]' src={item.imgSrc} alt="" />
                </div>
                <div className='w-[360px] rounded-r-3xl'>
                  <div className='rounded-tr-3xl p-2 text-3xl tracking-tight heading-area'>{item.heading}</div>
                  <div className='rounded-br-3xl p-2 tracking-tighter text-sm text-zinc-300/70 leading-tight'>{item.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className=' px-12 pt-5 max-xl:px-[6vw]'>
          <h1 className='heading-area text-4xl mb-5 text-cyan-400'> Practice Projects</h1>
          <p className='tracking-tighter leading-tight text-base text-[18px] xl:w-3/4 text-zinc-400'>
          These are some of the practice projects I have completed while learning fundamental and essential concepts. 
          Each of these projects is close to my heart as they represent significant steps in my learning journey. 
          </p>
        </div>
        <div className=' w-full max-xl:px-[6vw] py-12  px-12 flex max-xl:items-center max-xl:justify-center gap-12 flex-wrap'>
          {PracticeProjectList.map((item, index) => (
              <div key={index} className='w-[400px] max-xl:w-[360px] min-h-fit rounded-3xl bg-zinc-800 flex justify-center'>
                <div className='  w-[80px] rounded-l-3xl mx-1 flex items-center justify-center'>
                  <img className='w-[60px] h-[60px]' src={item.imgSrc} alt="" />
                </div>
                <div className='w-[360px] rounded-r-3xl '>
                  <div  className=' rounded-tr-3xl p-2  text-3xl tracking-tight heading-area'>{item.heading}</div>
                    <div  className=' rounded-br-3xl p-2 tracking-tighter text-sm text-zinc-300/70 leading-tight'>{item.description}</div>
                  </div>
              </div>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Projects;