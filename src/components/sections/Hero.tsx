import Button from "@mui/material/Button"
import Image from "next/image"

export function Hero() {
  return (
    <>
      <section id="home" className="block w-full min-h-screen p-10 ">
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 md:p-16 lg:p-4">
          <div className="flex flex-col text-center w-full justify-center px-4 gap-4">
            <p className="text-2xl lg:text-3xl">Hi! Im Adrian</p>
            <h2 className="font-poppins text-3xl md:text-3xl font-bold lg:text-4xl pb-2">
              FullStack <span className="text-green-600 pt-5">Developer</span>
            </h2>
            <p className="lg:text-xl pt-4 text-green-200">
              From concept to deployment
            </p>
            <div className="flex justify-center pt-3.5 gap-4 pb-10 md:flex-row md:justify-center">
              <Button
                aria-label="Github"
                component="a"
                href="https://github.com/Adriics"
              >
                Github
              </Button>
              <Button
                aria-label="Descargar CV"
                component="a"
                href="/Curriculum_Adrian_Calvache.pdf"
                // Ahhkafdnks
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
              className="object-contain w-full max-w-sm mx-auto"
              width={470}
              height={470}
            />
          </div>
        </div>
      </section>
    </>
  )
}
