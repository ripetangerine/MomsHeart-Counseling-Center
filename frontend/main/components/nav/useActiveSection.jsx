'use client'
import { useEffect, useState } from 'react'

export default function useActiveSection(anchors = []) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const targets = anchors
      .map((a) => document.getElementById(a))
      .filter(Boolean)

    if (!targets.length) return

    const io = new IntersectionObserver( // 브라우저 제공 관찰자, 요소가 뷰포트에 보이는 것을 알려줌
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting) // 화면에 일부라도 보이면 true
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0] // 보이는 면적 비율(0-1)

        if (top?.target?.id) { //top == entries entries.target에서 id를 읽음
          setActive(top.targets.id)  
        } else {
          setActive(null)
        }
      },
      {
        // 관찰 콜백에 대한 트리거
        // 0.5 -> 화면 50% 보이는 순간 콜백 호출
        // 각각 경계를 지날때마다 호출
        threshold: [0.5, 0.75, 0.98],
      }
    )
    // io.observe 해당 엘리먼트 관찰
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()   // 클린업 anchors 바뀔때마다 관찰 해제
  }, [anchors.join(',')]) // 의존성

  return active //
}
