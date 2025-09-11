import styles from "./css/CounselProgram.module.css";

export default function CounselProgram(){
  return(
      <section className="section" ClassName={styles.program}>
        <div ClassName={styles.buttons}>
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
          <button className={`${styles.button_item} ${styles.button_01}`}onClick="location.href=''" value={"성인상담"} />
        </div>
        <div ClassName={`${styles.container}`}>
          <div>
            <div className={styles.counsel_name}>{}</div>
            <div className={styles.sentense}>{}</div>
          </div>
          <div className={styles.counsel_bio}>{}</div>
          <button className={styles.more} value={"소개 더보기"}/>
          <div className={styles.suggest}>{"이런 분께 추천드려요"}</div>
          <div className={styles.suggest_for}>
            {/* 추천하는 사람 */}
          </div>
          ``
        </div>
      </section>
  );
}