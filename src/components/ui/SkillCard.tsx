import Image from "next/image"

interface SkillCardProps {
  altImage: string
  name: string
  srcImage: string
}

export default function SkillCard({
  altImage,
  name,
  srcImage,
}: SkillCardProps) {
  return (
    <>
      <div
        className="p-4 flex flex-col items-center gap-7"
        style={{ backgroundColor: "transparent" }}
      >
        <Image alt={altImage} src={srcImage} width={100} height={100} />
        <p>{name}</p>
      </div>
    </>
  )
}
