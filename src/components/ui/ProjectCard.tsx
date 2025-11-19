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
    {
      title: "Application for register and manage your bike trails, specific for cyclists",
      description:
        "This application is a web platform for cyclists to register and manage their bike trails, providing a platform for cyclists to share their favorite routes and find new ones to explore.",
      imageUrl: "/cyclemaps-hero.png",
      projectUrl: "https://cyclemaps.vercel.app",
    },
  ]

  return (
    <>
      <section className="w-full font-sans grid grid-cols-1 pb-20 lg:grid-cols-2 gap-10 md:items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col max-w-5xl items-center mb-8 border rounded-lg overflow-hidden shadow-lg md:flex-col md:justify-center md:items-center"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-100 h-64 object-contain flex-shrink-0"
            />
            <article>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 md:text-2xl">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-xl flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xl hover:underline md:text-sm mt-auto"
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
