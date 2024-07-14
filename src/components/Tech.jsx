

function Tech() {
    const techList = [
        {
          category: "Languages",
          tech: [
            { name: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)", imgSrc: "/C.svg" },
            { name: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B", imgSrc: "/C++.svg" },
            { name: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", imgSrc: "/js.png" },
            { name: "Typescript", href: "https://www.typescriptlang.org/", imgSrc: "/typescript.png" },
            { name: "Bash", href: "https://www.gnu.org/software/bash/", imgSrc: "/Bash icon.svg" },
            { name: "Python", href: "https://www.python.org/", imgSrc: "/Python.svg" }
          ]
        },
        {
          category: "Libraries & Frameworks",
          tech: [
            { name: "React", href: "https://reactjs.org/", imgSrc: "/react.webp" },
            { name: "Next.js", href: "https://nextjs.org/", imgSrc: "/NextJS icon.svg" },
            { name: "Express.js", href: "https://expressjs.com/", imgSrc: "/Express.svg" },
            { name: "Auth.js", href: "https://authjs.dev/", imgSrc: "/authjs.png" },
            { name: "Zod", href: "https://zod.dev/", imgSrc: "/zod.svg" },
            { name: "Tailwind", href: "https://tailwindcss.com/", imgSrc: "/Tailwind.svg" }
          ]
        },
        {
          category: "Databases & ORM",
          tech: [
            { name: "MongoDB", href: "https://www.mongodb.com/", imgSrc: "/MongoDB.svg" },
            { name: "Postgres", href: "https://www.postgresql.org/", imgSrc: "/Postgres.svg" },
            { name: "Prisma", href: "https://www.prisma.io/", imgSrc: "/Prisma.svg" },
            { name: "SQL", href: "https://www.w3schools.com/sql/", imgSrc: "/sql.png" },
            { name: "Firebase", href: "https://firebase.google.com/", imgSrc: "/Firebase.svg" },
            { name: "Redis", href: "https://redis.io/", imgSrc: "/Redis.svg" }
          ]
        },
        {
          category: "Devops & Tools",
          tech: [
            { name: "Docker", href: "https://www.docker.com/", imgSrc: "/Docker.svg" },
            { name: "Git", href: "https://git-scm.com/", imgSrc: "/Git.svg" },
            { name: "AWS", href: "https://aws.amazon.com/", imgSrc: "/AWS.svg" },
            { name: "Jenkins", href: "https://www.jenkins.io/", imgSrc: "/Jenkins.svg" }
          ]
        }
      ];
  return (
    <div className="relative">
      <div className="flex justify-center items-center text-wrap text-center">
        <h1 className="heading-area text-5xl max-xl:text-5xl ">Technical Skills</h1>
      </div>
        <div className="mt-4 flex flex-col items-center">
        {techList.map((item, index) => (
          <div key={index} className="flex flex-col items-center mt-6 w-full">
            <h3 className="heading-area tracking-tighter text-3xl text-cyan-500 mb-4">{item.category}</h3>
            <ul className="flex flex-wrap justify-center gap-4 mt-2 mb-4 w-full text-xl">
              {item.tech.map((tech, techIndex) => (
                <li key={techIndex}>
                  <a className="border-solid border-2 border-cyan-900 rounded-md px-6 py-3 hover:border-cyan-300 text-base flex items-center" href={tech.href} target="_blank" rel="noopener noreferrer">
                    <img src={tech.imgSrc} alt={tech.name} className="w-6 h-6 mr-2" />
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech