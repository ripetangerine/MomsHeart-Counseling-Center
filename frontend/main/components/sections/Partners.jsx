"use client"
import styles from "./css/Partners.module.css";

export default function Partners(){

  return(
    <section id="partners" className={`section ${styles.partners}`}>
      <div>
        <div className={styles.title1}>협력업체</div>
        <div className={styles.title2}>엄마상담심리센터는 이런 협력 네트워크를 구축하고 있어요</div>
      </div>
      <div className={styles.items}>
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
        <img src="/about/Frame427.png" alt="협력기관" />
      </div>
      <div className={styles.bottom-content}>
        <div>저희 센터는 지역사회에서 신뢰받는 전문 심리상담기관으로</div>
        <div>다양한 공공·민간 기관과 업무협약(MOU)을 체결하여 협력 네트워크를 구축하고 있습니다.</div>
      </div>
    </section>
  )
}

