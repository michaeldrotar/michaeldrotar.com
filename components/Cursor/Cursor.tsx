import React, { RefObject } from 'react'

type Props = {
  color: string
  message?: string
  cursorRef?: RefObject<HTMLDivElement>
}

export default function Cursor({ color, message, cursorRef }: Props) {
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 scale-125 fill-red-400 stroke-black stroke-1 dark:stroke-white"
      style={{ visibility: 'hidden' }}
      ref={cursorRef}
    >
      <svg
        className="relative"
        width="24"
        height="36"
        viewBox="0 0 24 36"
        // fill="none"
        // stroke="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
          // fill={color}
        />
      </svg>

      {message && (
        <div
          className="absolute left-2 top-5 rounded-3xl px-4 py-2"
          style={{ backgroundColor: color, borderRadius: 20 }}
        >
          <p className="whitespace-nowrap text-sm leading-relaxed text-white">
            {message}
          </p>
        </div>
      )}
    </div>
  )
}
