
import VerticalLine from './VerticalLine';

function Experience() {
  const experience = [
    {
      company: "HacktoberFest 2023",
      position: "Self",
      imgSrc: "/hackt.png",
      joining_date: "OCT,2023",
      end_date: "NOV,2023",
      description: "I dove deep into Rust implementation, honed my skills in crafting robust APIs, mastered the art of version control, and embraced the beauty of team collaborations. The journey was not just about code; it was a holistic learning experience! 🛠️💡"
    }
  ];

  return (
    <div className='px-4'>
      <h2 className='heading-area text-4xl '>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className='flex px-4 gap-x-8  mt-7'>
          <div className='flex flex-col items-center'>
            <img className='w-24 h-14 max-xl:w-[520px] max-xl:h-[9vh]' src={exp.imgSrc} alt={exp.company} />
              <div><VerticalLine /></div>
          </div>
          <div>
            <h3 className='heading-area max-xl:text-[7vw] tracking-tighter text-cyan-400 text-3xl'>
              {exp.company}
            </h3>
            <h4 className='text-zinc-300 font-bold tracking-tighter max-xl:text-xl'>
              {exp.position}
            </h4>
            <p className='text-zinc-300 tracking-tighter text-base text-[17px] max-xl:text-[4vw]'>
              {exp.joining_date} - {exp.end_date}
            </p>
            <p className='text-zinc-500 tracking-tighter text-[17px] text-base leading-tight max-xl:text-[4vw] text-wrap w-2/3 max-xl:w-full mt-5'>
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;