import { Hero } from "@/components/sections/Hero"
import AboutMe from "./about-me/page"
import { Projects } from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

export default function Home() {
  return (
    <main className="flex flex-col gap-32 p-8 sm:p-20">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  )
}
