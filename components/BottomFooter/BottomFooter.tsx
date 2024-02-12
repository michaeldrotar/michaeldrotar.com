import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function BottomFooter() {
  return (
    <footer className="mt-16 flex items-center justify-center gap-6 border-t border-neutral-500 px-6 py-16">
      <a
        href="https://github.com/michaeldrotar"
        target="_blank"
        aria-label="Visit my Github page"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://linkedin.com/in/michaeldrotar"
        target="_blank"
        aria-label="Visit my LinkedIn page"
      >
        <FaLinkedin size={32} />
      </a>
    </footer>
  )
}
