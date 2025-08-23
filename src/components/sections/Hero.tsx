import Image from "next/image"

export function Hero() {
  return (
    <>
      <section className="block w-full h-full">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center px-18 gap-4">
            <p className="text-2xl">Hi! Im Adrian</p>
            <h2 className="font-poppins text-5xl font-bold">
              FullStack <span className="text-green-600">Developer</span>
            </h2>
            <p>From concept to deployment</p>
          </div>
          <div>
            <Image
              src="/photo-black.jpg"
              alt="Hero Image"
              className="object-contain"
              width={400}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  )
}
