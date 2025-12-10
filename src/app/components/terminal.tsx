import { Command, CommandSeparator } from 'cmdk'
import { useEffect, useState } from 'react'
import { User, Folder, Briefcase, Linkedin, Github, Code } from 'lucide-react'
import Link from 'next/link'
export default function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: { metaKey: any; ctrlKey: any; key: string; preventDefault: () => void }) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const goTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  setOpen(false)
}


  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-transparent" onClick={()=>setOpen(false)}>
      <Command
          label="Command Menu"
          className="w-full max-w-md rounded-xl bg-white border border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.22),0_-12px_30px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden">
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className=" w-full p-3 border-b border-slate-300 text-sm outline-none placeholder:text-slate-400 font-mono text-black
          "
        />

        <Command.List
          onWheel={(e) => e.stopPropagation()}
          className="p-2 max-h-80 overflow-y-auto space-y-6"
        >
          <Command.Empty className="p-2 text-sm font-mono text-black">
            No results found.
          </Command.Empty>

        <Command.Group
            heading={<span className="mt-4 mb-2 font-mont text-xs text-slate-400 block px-3">Menu</span>}
          >
            <Command.Item
              onSelect={() => goTo('about')}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100"
            >
              <User size={16} />
              About
            </Command.Item>

            {/* <Command.Item
              onSelect={() => goTo('experience')}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100"
            >
              <Briefcase size={16} />
              Experience
            </Command.Item> */}

            <Command.Item
              onSelect={() => goTo('projects')}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100"
            >
              <Folder size={16} />
              Projects
            </Command.Item>

            <Command.Item
              onSelect={() => goTo('connect')}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100"
            >
              <Briefcase size={16} />
              Connect
            </Command.Item>
          </Command.Group>


          <CommandSeparator />

        <Command.Group
          heading={<span className="font-mont text-xs text-slate-400 block px-3 mt-4 mb-2">Social Links</span>}
        >
          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <Linkedin size={16} />
            <Link href='https://www.linkedin.com/in/ayush-kumar-88b883239/'>Linkedin</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <Github size={16} />
             <Link href='https://github.com/ayush9h'>Github</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <Code size={16} />
            <Link href="https://leetcode.com/u/ayukr_2002">Leetcode</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <Code size={16} />
            <Link href="https://codeforces.com/profile/ayush2025">Codeforces</Link>
          </Command.Item>
        </Command.Group>

          <CommandSeparator />
        </Command.List>
        <div className="relative flex items-center gap-2 p-3 mt-2 border-t border-t-slate-300">
          <span className="text-xs font-semibold font-mont text-slate-400">
            Exit
          </span>
          <kbd className="px-2 py-0.5 rounded border border-slate-300 bg-white text-[10px] font-mono text-slate-500">
            Esc
          </kbd>
        </div>

      </Command>
    </div>
  )
}
