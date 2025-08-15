'use client'
import { useEffect, useRef } from 'react'

export default function Fullpage({ children, options = {} }) {
  const fpRef = useRef(null)

  useEffect(() => {
    let fpInstance
    let destroyed = false

    ;(async () => {
      const { default: FullpageJS } = await import('fullpage.js')
      // eslint-disable-next-line new-cap
      fpInstance = new FullpageJS('#fullpage', {
        autoScrolling: true,
        navigation: true,
        scrollingSpeed: 700,
        ...options,
      })
      fpRef.current = fpInstance
    })()

    return () => {
      if (!destroyed && fpRef.current) {
        fpRef.current.destroy('all')
        destroyed = true
      }
    }
  }, [JSON.stringify(options)])

  return <div id="fullpage">{children}</div>
}
