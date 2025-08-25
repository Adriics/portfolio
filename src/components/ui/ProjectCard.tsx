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
      title: "Project 2",
      description: "Description for project 2",
      imageUrl: "/path/to/image2.jpg",
      projectUrl: "https://example.com/project2",
    },
  ]

  return (
    <section className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer">
      <div>
        {projects.map((p) => (
          <a key={p.title}>{p.title}</a>
        ))}
      </div>
    </section>
  )
}
