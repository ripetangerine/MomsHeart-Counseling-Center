'use client'
import styles from "./css/Review.module.css"

export default function SectionReview(){
  // DB
  return(
      <section id="review" className={`section ${styles.review}`}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.title_top}>상담후기</div>
            <div className={styles.title_content}>엄마심리상담센터에서 들려오는 생생한 후기</div>
          </div>
          <div className={styles.cards}>
            {[1,2,3].map((_, i)=>{
              return(
                <ReviewCard key={i} name={"홍길동"} date={"7.10"} visited={1} star={5}/>
              )
            })}
          </div>
        </div>
      </section>
  )
}

function ReviewCard({name, date, visited, star}){
  return(
    <div className={styles.card}>
      <div className={styles.card_top}>
        <img src="about/profile.png" alt="프로필사진" className={styles.profile}/>
        <div className={styles.card_title}>
          <div className={styles.card_name}>{name}</div>
          <div className={styles.card_name_content}>{date} · {visited}번째 방문</div>
        </div>
      </div>

      <div className={styles.stars}>
        {
          [1,2,3,4,5].map((_, i)=>{
            return(<img src="/about/star.png" alt="별이안나와요" key={i}/>);
          })
        }
      </div>
      
      <div className={styles.content}>
        타 상담센터 2곳에서 실망감을 안고 마지막이다라는 생각으로 방문한 곳, 엄마마음이였습니다 드디어 상담사다운 상담사분을 만나게 되었구나 했어요 상담 내내 제 마음을 잘 어루어주셔서 계속 울었네요 따뜻한 상담이였습니다 감사합니다
        다음 상담이 기대되네요
      </div>
    </div>
  );
}