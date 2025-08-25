import Image from "next/image"

export function ProjectCard() {
  const projects = [
    {
      title: "Spot&my",
      description:
        "It's a web application that allows users to search for songs, create playlists, and share them with friends. Built with React, Node.js, express.",
      imageUrl: "/spotimy.png",
      projectUrl: "https://spotimy.vercel.app/",
    },
    {
      title: "Complete API Rest with Node.js, Express",
      description:
        "That project is a RESTful API built with Node.js and Express, like a tournament system.",
      imageUrl: "/api.png",
      projectUrl: "https://example.com/project2",
    },
  ]

  return (
    <>
      <section className="w-full font-sans grid grid-cols-1 p-8 pb-20 sm:p-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex max-w-3xl items-center mb-8 border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-100 h-80 object-contain"
            />
            <article>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}
