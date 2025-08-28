'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import styles from './SectionHero.module.css'

// 예시 이미지 (public/hero/* 에 넣어둬)
const DEFAULT_IMAGES = ['/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg']

export default function SectionHero({
  id = 'hero',
  images = DEFAULT_IMAGES,
  intervalMs = 5000,
  ////// db
  titleImgDir = '/nav/main_logo.png',
  content1,
  content2,
}) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  // 진행바 애니메이션 리셋용 키
  const progressKey = useMemo(() => `${idx}-${intervalMs}`, [idx, intervalMs])

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
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
      {/* <div className="caption">
        <ImageAttach
          titleImgDir={titleImgDir}
          content1={content1}
          content2={content2}
        />
      </div> */}
    </section>
  )
}

function ImageAttach() {
  const titleImgDir = '/nav/main_logo.png'
  const content1 =
    '누군가의 <span className="orange">\'마음\'</span>을 가장 깊이 이해하고 싶다는 뜻에서 시작되었습니다.'
  const content2 =
    '<span className="blue">전문성</span>과 <span className="orange">따뜻함</span>으로 당신의 이야기에 귀를 기울이겠습니다.'

  return (
    <div>
      <img src={titleImgDir} alt="상담센터 사진" />
      <div className="overlay">
        <img src={titleImgDir} alt="상담센터 사진" className="titleLogo" />
        <p dangerouslySetInnerHTML={{ __html: content1 }} />
        <p dangerouslySetInnerHTML={{ __html: content2 }} />
      </div>
    </div>
  )
}
