import { ImageIcon } from 'lucide-react'

// A clearly-marked image placeholder with a correct aspect ratio.
// Swap these out for real photography in a later phase:
//   <Placeholder label="Hero" src="/contents/hero.jpg" />
//   =>  <img src="/contents/hero.jpg" alt="..." className="h-full w-full object-cover" />
export default function Placeholder({
  label = 'Image',
  src,
  className = '',
  aspect = 'aspect-[4/3]',
}) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-sky-50 to-white ring-1 ring-brand-100 ${className}`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/60 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-brand-300">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-brand-400 shadow-sm ring-1 ring-brand-100">
          <ImageIcon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>
        {src && <span className="text-[10px] font-medium">{src}</span>}
      </div>
    </div>
  )
}
