'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import styles from './css/SectionHero.module.css'

// DB
const DEFAULT_IMAGES = ['/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg']

export default function SectionHero({
  id = 'hero',
  images = DEFAULT_IMAGES,
  intervalMs = 5000,
}) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  // 진행바 애니메이션 리셋용 키
  const progressKey = useMemo(() => `${idx}-${intervalMs}`, [idx, intervalMs])

  if (timerRef.current) clearInterval(timerRef.current)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % images.length)
    }, intervalMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [images.length, intervalMs])

  return (
    <section
      id={id}
      className={`section hero ${styles.hero}`}
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
            <img src={src} alt="" className={`${styles.image} ${styles.veil}`} />
            <figcaption className={styles.caption}>
              <ImageAttach />
            </figcaption>
          </figure>
        ))}
      </div>

      {/* 상단 진행바: 슬라이드마다 5초 채워지고 전환 시 리셋 */}
      <div
        className={`${styles.progress} ${styles.veil}`}
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

function ImageAttach() {
  const Dir = '/nav/hero.png'
  return (
    <div className={styles.overlay}>
      <img className={styles.overlay_logo} src={Dir} alt="상담센터 사진" />
      <div className={styles.overlay_text}>
        {/* DB */}
        <div>
          누군가의 <span className={styles.overlay_pink}>'마음'</span>을 가장 깊이 이해하고 싶다는 뜻에서 시작되었습니다
        </div>
        <div>
          <span className={styles.overlay_blue}>전문성</span>과 <span className={styles.overlay_orange}>따뜻함</span>으로 당신의 이야기에 귀를 기울이겠습니다.
        </div>
      </div>
    </div>
  )
}
