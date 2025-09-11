'use client'
import { useEffect, useState } from 'react'

export default function useActiveSection(anchors = []) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const targets = anchors
      .map((a) => document.getElementById(a))
      .filter(Boolean)

    if (!targets.length) return

    // 고정 네비게이션 높이 보정 및 좀 더 관대한 임계값
    const NAV_H = 60
    const io = new IntersectionObserver( // 브라우저 제공 관찰자, 요소가 뷰포트에 보이는 것을 알려줌
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          const topMost = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
          if (topMost?.target?.id) setActive(topMost.target.id)
          return
        }
        // 가시 항목이 없을 때, 가장 위쪽에 가까운 섹션을 근사치로 선택
        const nearest = entries
          .slice()
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]
        if (nearest?.target?.id) setActive(nearest.target.id)
      },
      {
        // 고정 헤더에 가리지 않도록 top을 음수로 보정
        root: null,
        rootMargin: `-${NAV_H}px 0px -50% 0px`,
        threshold: [0, 0.25, 0.5],
      }
    )
    // io.observe 해당 엘리먼트 관찰
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()   // 클린업 anchors 바뀔때마다 관찰 해제
    // 해시로 진입 시 즉시 활성화 보정
    const hash = window.location.hash?.replace('#', '')
    if (hash && anchors.includes(hash)) setActive(hash)

  }, [anchors.join(',')]) // 의존성

  return active //
}
