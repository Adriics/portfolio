import { ProjectCard } from "../ui/ProjectCard"

export function Projects() {
  return (
    <section className="font-sans flex flex-col  p-8 pb-20 sm:p-20">
      <div className="relative mb-10">
        <h2 className="font-extrabold italic opacity-30 text-gray-50 text-4xl uppercase absolute tracking-widest">
          Projects
        </h2>
        <h4 className="tracking-widest font-poppins pt-2 text-2xl font-bold">
          My work
        </h4>
      </div>

      <div className="flex items-center">
        <ProjectCard />
      </div>
    </section>
  )
}
