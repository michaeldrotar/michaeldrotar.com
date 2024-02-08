'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'

interface CounterProps {
  initialCount?: number
  minus?: string
  plus?: string
}

function Counter({ initialCount = 99, minus = '-', plus = '+' }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        {minus}
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        {plus}
      </button>
    </div>
  )
}

export default Counter
