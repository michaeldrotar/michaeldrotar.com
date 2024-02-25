import { ThemeToggleButton } from '@/theme/ThemeToggleButton/ThemeToggleButton'
import Image from 'next/image'

export function TopNavigation() {
  return (
    <nav className="relative z-10 m-auto flex h-32 max-w-7xl items-center justify-between px-6">
      <div>
        <h1 className="flex flex-row items-center gap-2 text-2xl font-bold">
          <Image
            src="/m-ribbon-logo.png"
            height="32"
            width="32"
            alt=""
            aria-hidden="true"
          />
          Michael Drotar
        </h1>
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
