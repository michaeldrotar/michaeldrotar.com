import { ThemeToggleButton } from '@/theme/ThemeToggleButton/ThemeToggleButton'
import Image from 'next/image'
import Link from 'next/link'

export function TopNavigation() {
  return (
    <nav className="relative z-40 m-auto flex h-32 max-w-7xl items-center justify-between px-6">
      <div>
        <Link href={'/'}>
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
        </Link>
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
