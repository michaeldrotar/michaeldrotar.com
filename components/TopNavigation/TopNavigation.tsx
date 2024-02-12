import { ThemeToggleButton } from '@/theme/ThemeToggleButton/ThemeToggleButton'

export function TopNavigation() {
  return (
    <nav className="flex h-32 items-center justify-between px-4">
      <div>
        <h1 className="text-2xl font-bold">Michael Drotar</h1>
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
