'use client'
import { useEffect, useState } from 'react'

export default function useActiveSection(anchors = []) {
  const [active, setActive] = useState(anchors[0] || null)

  useEffect(() => {
    const targets = anchors
      .map((a) => document.getElementById(a))
      .filter(Boolean)

    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        // 가장 화면에 많이 보이는 섹션을 active로 설정
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (top?.target?.id) setActive(top.target.id)
      },
      {
        threshold: [0.5, 0.75, 0.98],
      }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [anchors.join(',')])

  return active
}
