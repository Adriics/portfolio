import Button from "@mui/material/Button"
import Image from "next/image"

export default function About() {
  const name = "Adrian Calvache Sanchez"
  const age = new Date().getFullYear() - 2004
  const location = "Barcelona, Spain"
  const email = "adriancalvachesanchez@gmail.com"
  return (
    <section className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-32 sm:p-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center px-18 gap-4">
          <Image
            src="/avatar.jpeg"
            alt="Hero Image"
            className="object-contain"
            width={400}
            height={200}
          />
        </div>
        <div className="font-inter">
          <h2 className="text-green-400 font-semibold">Who am I?</h2>
          <p className="pt-10 text-lg leading-7">
            I am a 20-year-old multiplatform app developer. My passion for
            technology began at an early age, spending countless hours playing
            on Nintendo and other consoles. That curiosity soon turned into a
            question: `How are these games made?`
          </p>
          <p className="pt-10 text-lg leading-7">
            Since then, I’ve been learning to code — starting with HTML, CSS,
            and JavaScript — and expanding my skills into modern frameworks and
            mobile app development. I create digital solutions with the same
            curiosity and excitement that first inspired me to code.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-8 text-sm text-gray-300 mb-8">
            <span>Name: {name}</span>
            <span>Age: {age}</span>
            <span>Location: {location}</span>
            <span>Email: {email}</span>
          </div>

          <Button
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-fit"
            variant="outlined"
            href="/Curriculum_Adrian_Calvache.pdf"
            target="_blank"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
