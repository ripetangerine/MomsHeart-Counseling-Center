'use client'
import styles from "./css/About.module.css"

export default function About() {
  // DB (내용이 바뀔 가능성)
    return (
      <section id="about" className={`section ${styles.about}`} style={{ background: "#FFFAEE" }}>
        <div className={styles.total_content}>
          <div className={styles.title}>
            <div className={styles.sub_title}> 석·박사 이상의 전문성과 엄격한 수련을 갖춘</div>
            <div className={styles.main_title}>
              심리상담 전문가들이 <span className={styles.marker}>신뢰할 수 있는</span> 심리상담 서비스를 제공합니다.
            </div>
          </div>
          <div className={styles.contents}>
            <p className={styles.text}>저희 센터는 상담심리 전문가이자 심리상담 수련감독자가 직접 관리·운영하는 곳으로 성인, 청소년, 아동, 가족 상담 분야의 전문가 11인이 함께 하고 있습니다.</p>
            <p className={styles.text}>개인 및 집단 상담, 심리치료는 물론 상담 교육과 전문가 수련 과정까지 믿을 수 있는 서비스를 서울 강서구에서 만나보세요.</p>
            <p className={styles.text}>엄마의 마음으로 당신의 성장에 함께 하겠습니다.</p>
            
          </div>
        </div>
      </section>
    );
}   