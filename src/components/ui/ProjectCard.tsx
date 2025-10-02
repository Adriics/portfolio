import Image from "next/image"

export function ProjectCard() {
  const projects = [
    {
      title: "Spotimy - Music Playlist App",
      description:
        "It's a web application that allows users to search for songs, create playlists, and share them with friends. Built with React, Node.js, express. For now, only available on computer please, responsive design will be finished very   soon.",
      imageUrl: "/spotimy.png",
      projectUrl: "https://mini-spotify-eta.vercel.app/",
    },
    {
      title: "Complete API Rest with Node.js, Express",
      description:
        "That project is a RESTful API built with Node.js and Express, like a tournament system.",
      imageUrl: "/api.png",
      projectUrl: "https://example.com/project2",
    },
    {
      title: "Code Reviewer with AI",
      description:
        "This project is a app built in Vite and React, Typescript and Tailwind that help you with your code with help or improves, clean code...",
      imageUrl: "/review.png",
    },
  ]

  return (
    <>
      <section className="w-full font-sans grid grid-cols-1 pb-20 lg:grid-cols-2 gap-10 md:items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-100 flex flex-col max-w-5xl items-center mb-8 border rounded-lg overflow-hidden shadow-lg md:flex-col md:justify-center md:items-center"
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
                <h3 className="text-xl font-bold mb-2 md:text-2xl">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-xl">
                  {project.description}
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xl hover:underline md:text-sm"
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
