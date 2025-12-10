import { Command, CommandSeparator } from 'cmdk'
import { useEffect, useState } from 'react'
import { User, Folder, Briefcase, Link } from 'lucide-react'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/20">
      <Command
        label="Command Menu"
        className=" w-full max-w-md rounded-xl bg-white border border-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.12)] cursor-pointer"
      >
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className="
            w-full
            p-3
            border-b border-slate-300
            text-sm
            outline-none
            placeholder:text-slate-400
            font-mono
            text-black
          "
        />

        <Command.List
          onWheel={(e) => e.stopPropagation()}
          className="p-2 max-h-80 overflow-y-auto space-y-4">
          <Command.Empty className="p-2 text-sm font-mono text-black">
            No results found.
          </Command.Empty>

          <Command.Group heading="Menu" className="text-xs font-mont text-slate-400 px-1">
            <div className="space-y-1 mt-2">
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <User size={16} />
                About
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <Briefcase size={16} />
                Experience
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <Folder size={16} />
                Projects
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <Link size={16} />
                Connect
              </Command.Item>
            </div>
          </Command.Group>

          <CommandSeparator className="my-2" />

          <Command.Group heading="Socials" className="text-xs font-mont text-slate-400 px-1">
            <div className="space-y-1 mt-2">
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <User size={16} />
                Linkedin
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <Folder size={16} />
                LeetCode
              </Command.Item>
              <Command.Item className="flex items-center gap-3 p-3 rounded-md text-sm font-mont text-black data-[selected=true]:bg-slate-100">
                <Briefcase size={16} />
                Codeforces
              </Command.Item>
            </div>
          </Command.Group>

          <CommandSeparator className="my-2" />
        </Command.List>
      </Command>
    </div>
  )
}
