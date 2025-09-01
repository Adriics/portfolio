import SkillCard from "../ui/SkillCard"

const skills = [
  { altImage: "HTML Logo", name: "HTML", srcImage: "/html-icon.png" },
  { altImage: "CSS Logo", name: "CSS", srcImage: "/css-icon.svg" },
  {
    altImage: "Tailwind Logo",
    name: "Tailwind",
    srcImage: "/tailwind-css.svg",
  },
  {
    altImage: "JavaScript Logo",
    name: "JavaScript",
    srcImage: "/javascript-logo.svg",
  },
  { altImage: "React Logo", name: "React", srcImage: "/react-icon.svg" },
  { altImage: "Node.js Logo", name: "Node js", srcImage: "/node-js.svg" },
  { altImage: "Docker Logo", name: "Docker", srcImage: "/docker.svg" },
  { altImage: "GitHub Logo", name: "GitHub", srcImage: "/github.svg" },
  { altImage: "MongoDB Logo", name: "MongoDB", srcImage: "/mongodb.svg" },
  { altImage: "Express Logo", name: "Express", srcImage: "/Express.svg" },
]

export default function Skills() {
  return (
    <section className="flex flex-col">
      <div className="relative pb-10 p-8 sm:p-20">
        <h2 className="absolute text-6xl text-gray-500 opacity-20 italic font-poppins font-extrabold tracking-widest">
          SKILLS & TECHS
        </h2>
        <h4 className="font-poppins pt-5 px-3.5 text-4xl tracking-widest font-semibold">
          What I do?
        </h4>
      </div>

      <p className="text-center font-inter">
        Fullstack developer in the making, passionate about creating functional,
        clean and efficient web applications.
      </p>

      {/* Contenedor grid principal */}
      <div className="mt-20 grid md:grid-cols-[auto_1fr]">
        {/* Texto SKILLS lateral para pantallas grandes */}
        <div className="hidden md:flex items-center justify-center border-r-4 border-amber-300 px-4">
          <span className="font-bold text-green-600 rotate-270 tracking-widest text-xl">
            SKILLS
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
