export default function Experience() {
  const jobs = [
    {
      date: "September 2024 – July 2025",
      title: "Software Developer",
      company: "Viewnext (CaixaBank)",
      tasks: [
        "Developing web applications for CaixaBank client",
        "Ensuring clean, scalable, and maintainable code",
        "Preparing and managing application server environments",
      ],
    },
    {
      date: "January 2024 – April 2024",
      title: "Cashier & Stock Clerk",
      company: "BonArea",
      tasks: [
        "Stock replenishment, product quality checks, and cashier responsibilities",
      ],
    },
    {
      date: "December 2021 – May 2023",
      title: "IT Intern",
      company: "Educational Center",
      tasks: [
        "Technical support and hardware maintenance",
        "Website maintenance and updates",
      ],
    },
    {
      date: "October 2022 – December 2022",
      title: "Volunteer IT Instructor",
      company: "Centre Cívic La Concòrdia",
      tasks: ["Teaching basic computer skills to adults"],
    },
  ]

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#121212] text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="border-l-4 border-amber-400 pl-6 relative">
            <span className="absolute -left-[10px] top-1 w-5 h-5 bg-amber-400 rounded-full"></span>
            <p className="text-sm text-gray-400">{job.date}</p>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-300 mb-2">{job.company}</p>
            <ul className="list-disc list-inside text-gray-400">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
