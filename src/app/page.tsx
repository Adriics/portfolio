import { Hero } from "@/components/sections/Hero"
import AboutMe from "./about-me/page"

export default function Home() {
  return (
    <main className="flex flex-col gap-32 p-8 sm:p-20">
      <Hero />
      <AboutMe />
    </main>
  )
}
