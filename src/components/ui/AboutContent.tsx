import Button from "@mui/material/Button"

export function AboutContent() {
  const name = "Adrian Calvache Sanchez"
  const age = new Date().getFullYear() - 2004
  const location = "Barcelona, Spain"
  const email = "adriancalvachesanchez@gmail.com"

  return (
    <>
      <div className="font-inter max-w-sm order-1 lg:order-2 justify-center items-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold text-center pb-10"
          style={{ color: "#F2F4CB" }}
        >
          Who am I?
        </h2>
        <p className="pt-10 text-lg leading-7">
          I am a 20-year-old multiplatform app developer. My passion for
          technology began at an early age, spending countless hours playing on
          Nintendo and other consoles. That curiosity soon turned into a
          question: `How are these games made?`
        </p>
        <p className="pt-10 text-lg leading-7">
          Since then, I’ve been learning to code — starting with JavaScript,
          React, Node — and expanding my skills into modern frameworks and
          mobile app development. I create digital solutions with the same
          curiosity and excitement that first inspired me to code.
        </p>

        <div className="grid grid-cols-1 gap-4 pt-8 text-base text-gray-300 mb-8">
          <span>Name: {name}</span>
          <span>Age: {age}</span>
          <span>Location: {location}</span>
          <span className="text-xs md:text-sm">Email: {email}</span>
        </div>

        <Button
          className="hover:text-black justify-center"
          variant="outlined"
          sx={{ backgroundColor: "#F2F4CB", color: "#000000" }}
          href="/Curriculum_Adrian_Calvache.pdf"
          target="_blank"
          download="Curriculum_Adrian_Calvache.pdf"
        >
          Download CV
        </Button>
      </div>
    </>
  )
}
