export default function Skills() {
  return (
    <>
      <section className="flex flex-col">
        <div className="relative pb-10 p-8 sm:p-20">
          <h2 className="absolute text-6xl text-gray-500 opacity-20 italic font-poppins font-extrabold tracking-widest">
            SKILLS & TECHS
          </h2>
          <h4 className="font-poppins pt-5 px-3.5 text-4xl tracking-widest font-semibold">
            What I do?
          </h4>
        </div>

        <p className="text-center font-inter">
          Fullstack developer in the making, passionate about creating
          functional, clean and efficient web applications.
        </p>

        <div className="grid grid-cols-6">
          <div>
            <span className="block font-bold text-green-600 rotate-270 origin-left tracking-widest text-xl mt-60 ml-25">
              SKILLS
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
