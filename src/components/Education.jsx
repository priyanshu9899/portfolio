import VerticalLine from './VerticalLine';

function Education() {
  const education = [
    {
      school: "SRM Institute of Scinece and Technology",
      cgpa: " CGPA 9.2",
      imgSrc: "/Srm.png",
      joining_date: "JUNE,2022",
      end_date: "MAY,2026",
      description: "I am currently in 3rd year of my B.Tech in Computer Science and Engineering in SRM Institute Of Science & Technology, Chennai."
    },
    {
        school: "St. Mary's English High School",
        cgpa: " XII - 80%",
        imgSrc: "/stmary.webp",
        joining_date: "APRIL,2019",
        end_date: "MAY,2021",
        description: "I completed my Higher Studies in Mathematics and Computer Science at St. Mary's English High School, Jamshedpur, Jharkhand."
    },
    {
        school: "Sri Krishna Public School ",
        cgpa: " X - 85%",
        imgSrc: "/skps.png",
        joining_date: "APRIL,2006",
        end_date: "MAY,2019",
        description: "I completed my Primary Education with Science as primary subject at Sri Krishna Public School, Jamshedpur, Jharkhand."
    },
  ];

  return (
    <div className='mb-10 px-4'>
      <h2 className='heading-area text-4xl'>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className='flex px-4 gap-x-8  mt-7'>
          <div>
            <img className='w-14 h-14 max-xl:w-52 max-xl:h-12' src={edu.imgSrc} alt={edu.company} />
            <div className='absolute left-[100px] max-xl:left-[65px]'>
              <VerticalLine />
            </div>
          </div>
          <div>
            <h3 className='heading-area max-xl:text-[7vw] tracking-tighter text-3xl text-cyan-400'>
              {edu.school}
            </h3>
            <p className='text-zinc-300 tracking-tight text-[17px] text-base max-xl:text-[4vw]'>
              {edu.joining_date} - {edu.end_date}
            </p>
            <button className='font-bold tracking-tight text-[17px] text-base max-xl:text-[4vw] border border-solid px-2 border-cyan-700 rounded-md mt-2 mb-2 bg-cyan-800'>
              {edu.cgpa}
            </button>
            <p className='text-zinc-500 tracking-tighter text-[17px] max-xl:text-[4vw] text-base leading-tight text-wrap w-2/3 max-xl:w-full mt-5'>
              {edu.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;