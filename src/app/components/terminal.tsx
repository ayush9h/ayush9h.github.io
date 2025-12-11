import { Command, CommandSeparator } from 'cmdk'
import { useEffect, useState } from 'react'
import { LinkedInLogoIcon,GitHubLogoIcon, GlobeIcon, CodeIcon, CodeSandboxLogoIcon } from '@radix-ui/react-icons'
import { User, Folder, Award } from 'lucide-react'
import Link from 'next/link'
export default function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
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
          className="w-full max-w-md rounded-xl bg-white border border-slate-300 shadow-[0_25px_60px_rgba(0,0,0,0.22),0_-12px_30px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden">
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className=" w-full p-3 border-b border-slate-300 text-sm outline-none placeholder:text-slate-400 font-mont text-black
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

            <Command.Item
              onSelect={() => goTo('accolades')}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100"
            >
              <Award size={16} />
              Accolades
            </Command.Item>

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
              <GlobeIcon />
              Connect
            </Command.Item>
          </Command.Group>


          <CommandSeparator />

        <Command.Group
          heading={<span className="font-mont text-xs text-slate-400 block px-3 mt-4 mb-2">Social Links</span>}
        >
          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <LinkedInLogoIcon className='text-blue-500' />
            <Link href='https://www.linkedin.com/in/ayush-kumar-88b883239/'>Linkedin</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <GitHubLogoIcon />
             <Link href='https://github.com/ayush9h'>Github</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <CodeSandboxLogoIcon className='text-yellow-500'  />
            <Link href="https://leetcode.com/u/ayukr_2002">Leetcode</Link>
          </Command.Item>

          <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
            <CodeIcon className='text-red-500' />
            <Link href="https://codeforces.com/profile/ayush2025">Codeforces</Link>
          </Command.Item>
        </Command.Group>

          <CommandSeparator />
        </Command.List>
        <div className="relative flex items-center justify-end gap-2 p-3 mt-2 border-t border-t-slate-300">
          <span className="text-xs font-semibold font-mont text-slate-400">
            Exit
          </span>
          <kbd className="px-2 py-0.5 rounded-md border border-slate-300 bg-zinc-100 text-xs font-mont shadow-md text-black">
            Esc
          </kbd>
        </div>

      </Command>
    </div>
  )
}
