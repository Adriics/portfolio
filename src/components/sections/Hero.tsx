import Button from "@mui/material/Button"
import Image from "next/image"

export function Hero() {
  return (
    <>
      <section className="block w-full min-h-screen p-10 sm:p-17">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center px-18 gap-4">
            <p className="text-2xl">Hi! Im Adrian</p>
            <h2 className="font-poppins text-5xl font-bold">
              FullStack <span className="text-green-600">Developer</span>
            </h2>
            <p>From concept to deployment</p>
            <div className="flex gap-8 pt-4">
              <Button
                aria-label="Descargar CV"
                component="a"
                href="https://github.com/Adriics"
              >
                Github
              </Button>
              <Button
                aria-label="Descargar CV"
                component="a"
                href="/Curriculum_Adrian_Calvache.pdf"
                download="Curriculum_Adrian_Calvache.pdf"
              >
                CV
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/photo-black.jpg"
              alt="Hero Image"
              className="object-contain"
              width={470}
              height={470}
            />
          </div>
        </div>
      </section>
    </>
  )
}
