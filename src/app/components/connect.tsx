import { SectionHeader, SectionWrapper, SectionDivider } from "./compstruct"
export default function Connect() {
 
 
  const links = [
    { name: "Github", url: "https://github.com/ayush9h" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/ayush-kumar-88b883239/" },
    { name: "LeetCode", url: "https://leetcode.com/u/ayukr_2002/" },
    { name: "Codeforces", url: "https://codeforces.com/profile/ayush2025/" }
  ]

  return (
    <>     
    <SectionWrapper>
      <SectionHeader title="Connect" id="connect"></SectionHeader>
    </SectionWrapper>


    <SectionWrapper>
        <h1 className="text-2xl md:text-8xl text-center uppercase text-zinc-950 font-medium font-mont p-4">
          Ayush Kumar
        </h1>
    </SectionWrapper>

    <SectionWrapper>

      <div className="grid md:grid-cols-4 sm:grid-cols-2  p-4">
          {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-md flex items-center justify-center h-full 
                       hover:bg-white hover:text-black hover:underline 
                       transition-all duration-300 
                       text-zinc-500 font-mont space-x-2 rounded-md px-4"
          >
            <span className="font-mont uppercase font-bold">{link.name}</span>
          
          </a>
        ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h1 className="text-md text-center text-zinc-400/65 font-mont p-4">
          Inspired by chanhdai.com & tailwindcss.com
        </h1>
      </SectionWrapper>

        <SectionDivider/>
</>
  )
}
