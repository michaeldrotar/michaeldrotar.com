'use client'

import {
  useBroadcastEvent,
  useEventListener,
  useMyPresence,
  useOthers,
} from '../liveblocks.config'
import React, { useState, useCallback, useEffect, ReactNode } from 'react'
import Cursor from '../components/Cursor/Cursor'
import FlyingReaction from '../components/FlyingReaction'
import ReactionSelector from '../components/ReactionSelector'
import useInterval from '../hooks/useInterval'

/**
 * This file shows how to create Live Cursors with a small chat and interactions
 *
 * Because it's a bit more advanced that others examples, it's implemented using typescript to ensure that we introduce less bug while maintaining it.
 * It also uses Tailwind CSS for the styling
 */

const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777']

enum CursorMode {
  Hidden,
  Chat,
  ReactionSelector,
  Reaction,
}

type CursorState =
  | {
      mode: CursorMode.Hidden
    }
  | {
      mode: CursorMode.Chat
      message: string
      previousMessage: string | null
    }
  | {
      mode: CursorMode.ReactionSelector
    }
  | {
      mode: CursorMode.Reaction
      reaction: string
      isPressed: boolean
    }

type Reaction = {
  value: string
  timestamp: number
  point: { x: number; y: number }
}

type ReactionEvent = {
  x: number
  y: number
  value: string
}

function Example({ children }: { children?: ReactNode }) {
  const others = useOthers()
  const [{ cursor }, updateMyPresence] = useMyPresence()
  const broadcast = useBroadcastEvent()
  const [state, setState] = useState<CursorState>({ mode: CursorMode.Hidden })
  const [reactions, setReactions] = useState<Reaction[]>([])

  const setReaction = useCallback((reaction: string) => {
    setState({ mode: CursorMode.Reaction, reaction, isPressed: false })
  }, [])

  // Remove reactions that are not visible anymore (every 1 sec)
  useInterval(() => {
    setReactions((reactions) =>
      reactions.filter((reaction) => reaction.timestamp > Date.now() - 4000),
    )
  }, 1000)

  useInterval(() => {
    if (state.mode === CursorMode.Reaction && state.isPressed && cursor) {
      setReactions((reactions) =>
        reactions.concat([
          {
            point: { x: cursor.x, y: cursor.y },
            value: state.reaction,
            timestamp: Date.now(),
          },
        ]),
      )
      broadcast({
        x: cursor.x,
        y: cursor.y,
        value: state.reaction,
      })
    }
  }, 100)

  useEffect(() => {
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === '/') {
        setState({ mode: CursorMode.Chat, previousMessage: null, message: '' })
      } else if (e.key === 'Escape') {
        updateMyPresence({ message: '' })
        setState({ mode: CursorMode.Hidden })
      } else if (e.key === 'e') {
        setState({ mode: CursorMode.ReactionSelector })
      }
    }

    window.addEventListener('keyup', onKeyUp)

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === '/') {
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [updateMyPresence])

  useEventListener((eventData) => {
    const event = eventData.event as ReactionEvent
    setReactions((reactions) =>
      reactions.concat([
        {
          point: { x: event.x, y: event.y },
          value: event.value,
          timestamp: Date.now(),
        },
      ]),
    )
  })

  return (
    <>
      <div
        className="relative flex min-h-screen w-full touch-none overflow-hidden"
        style={{
          cursor:
            state.mode === CursorMode.Chat
              ? 'none'
              : 'url(cursor.svg) 0 0, auto',
        }}
        onPointerMove={(event) => {
          event.preventDefault()
          if (cursor == null || state.mode !== CursorMode.ReactionSelector) {
            updateMyPresence({
              cursor: {
                x: Math.round(event.clientX),
                y: Math.round(event.clientY),
              },
            })
          }
        }}
        onPointerLeave={() => {
          setState({
            mode: CursorMode.Hidden,
          })
          updateMyPresence({
            cursor: null,
          })
        }}
        onPointerDown={(event) => {
          updateMyPresence({
            cursor: {
              x: Math.round(event.clientX),
              y: Math.round(event.clientY),
            },
          })
          setState((state) =>
            state.mode === CursorMode.Reaction
              ? { ...state, isPressed: true }
              : state,
          )
        }}
        onPointerUp={() => {
          setState((state) =>
            state.mode === CursorMode.Reaction
              ? { ...state, isPressed: false }
              : state,
          )
        }}
      >
        {reactions.map((reaction) => {
          return (
            <FlyingReaction
              key={reaction.timestamp.toString()}
              x={reaction.point.x}
              y={reaction.point.y}
              timestamp={reaction.timestamp}
              value={reaction.value}
            />
          )
        })}
        {cursor && (
          <div
            className="absolute left-0 top-0"
            style={{
              transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
            }}
          >
            {state.mode === CursorMode.Chat && (
              <>
                <img src="cursor.svg" />

                <div
                  className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white"
                  onKeyUp={(e) => e.stopPropagation()}
                  style={{
                    borderRadius: 20,
                  }}
                >
                  {state.previousMessage && <div>{state.previousMessage}</div>}
                  <input
                    className="w-60 border-none	bg-transparent text-white placeholder-blue-300 outline-none"
                    autoFocus={true}
                    onChange={(e) => {
                      updateMyPresence({ message: e.target.value })
                      setState({
                        mode: CursorMode.Chat,
                        previousMessage: null,
                        message: e.target.value,
                      })
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setState({
                          mode: CursorMode.Chat,
                          previousMessage: state.message,
                          message: '',
                        })
                      } else if (e.key === 'Escape') {
                        setState({
                          mode: CursorMode.Hidden,
                        })
                      }
                    }}
                    placeholder={state.previousMessage ? '' : 'Say something…'}
                    value={state.message}
                    maxLength={50}
                  />
                </div>
              </>
            )}
            {state.mode === CursorMode.ReactionSelector && (
              <ReactionSelector
                setReaction={(reaction) => {
                  setReaction(reaction)
                }}
              />
            )}
            {state.mode === CursorMode.Reaction && (
              <div className="pointer-events-none absolute left-1 top-3.5 select-none">
                {state.reaction}
              </div>
            )}
          </div>
        )}

        {others.map(({ connectionId, presence }) => {
          if (presence == null || !presence.cursor) {
            return null
          }

          return (
            <Cursor
              key={connectionId}
              color={COLORS[connectionId % COLORS.length]}
              message={presence.message}
            />
          )
        })}
        <div>{children}</div>
      </div>
    </>
  )
}

export default function Cursors({ children }: { children?: ReactNode }) {
  //   const roomId = useOverrideRoomId('nextjs-live-cursors-chat')

  return (
    <>
      {/* // <RoomProvider
    //   id={roomId}
    //   initialPresence={() => ({
    //     cursor: null,
    //     message: '',
    //   })}
    // > */}
      <div className="inset-0 flex select-none items-center justify-center bg-white">
        <div className="max-w-sm text-center">
          <ul className="mt-4 flex items-center justify-center space-x-2">
            <li className="flex items-center space-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm">
              <span>Reactions</span>
              <span className="block rounded border border-gray-300 px-1 text-xs font-medium uppercase text-gray-500">
                E
              </span>
            </li>

            <li className="flex items-center space-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm">
              <span>Chat</span>
              <span className="block rounded border border-gray-300 px-1 text-xs font-medium uppercase text-gray-500">
                /
              </span>
            </li>

            <li className="flex items-center space-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm">
              <span>Escape</span>
              <span className="block rounded border border-gray-300 px-1 text-xs font-medium uppercase text-gray-500">
                esc
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Example>{children}</Example>
      {/* // </RoomProvider> */}
    </>
  )
}
