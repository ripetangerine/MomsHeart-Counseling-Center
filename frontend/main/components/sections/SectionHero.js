'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import styles from './SectionHero.module.css'

// 예시 이미지 (public/hero/* 에 넣어둬)
const DEFAULT_IMAGES = ['/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg']

export default function SectionHero({
  id = 'hero',
  images = DEFAULT_IMAGES,
  intervalMs = 5000,
}) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  // 프로그레스 애니메이션 재시작용 키
  const progressKey = useMemo(() => `${idx}-${intervalMs}`, [idx, intervalMs])

  useEffect(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(timerRef.current)
  }, [images.length, intervalMs])

  return (
    <section
      id={id}
      className={`section ${styles.hero}`}
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div className={styles.stage}>
        {images.map((src, i) => (
          <figure
            key={src}
            className={`${styles.slide} ${i === idx ? styles.active : ''}`}
            aria-hidden={i !== idx}
          >
            <img src={src} alt="" className={styles.image} />
            <figcaption className={styles.caption}>
              {/* 필요하면 여기 캡션/CTA 넣어 */}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* 상단 진행바: 슬라이드마다 5초 채워지고 전환 시 리셋 */}
      <div
        className={styles.progress}
        key={progressKey}
        style={{ ['--dur']: `${intervalMs}ms` }}
      />

      {/* 도트: 자동 재생 상태만 표시 (조작 불가) */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
