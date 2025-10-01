import { ProjectCard } from "../ui/ProjectCard"

export function Projects() {
  return (
    <section
      id="portfolio"
      className="font-sans flex flex-col  p-8 pb-20 sm:p-20"
    >
      <div className="relative mb-10">
        <h2 className="font-extrabold italic opacity-20 text-gray-500 text-6xl uppercase absolute tracking-widest">
          Projects
        </h2>
        <h4 className="tracking-widest font-poppins pt-4 px-3.5 text-4xl font-bold text-[#B7990D]">
          My work
        </h4>
      </div>

      <div className="flex">
        <ProjectCard />
      </div>
    </section>
  )
}
