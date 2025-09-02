import Image from "next/image"
import { AboutContent } from "../ui/AboutContent"

export default function About() {
  return (
    <section
      id="resume"
      className="font-sans flex flex-col min-h-screen items-center justify-center gap-32 sm:p-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center px-4 gap-4 order-2 lg:order-1">
          <Image
            src="/avatar.jpeg"
            alt="Hero Image"
            className="object-contain max-w-sm mx-auto md:w-xl"
            width={200}
            height={200}
          />
        </div>
        <AboutContent />
      </div>
    </section>
  )
}
