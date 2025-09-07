'use client'

import styles from "./css/Expert.module.css";

export default function Expert(){
  // 전문가 소개
  return(
    <section className={`section ${styles.expert}`} style={{ background: "#f7f7f7" }}>
      <div className={styles.title}>전문가 소개</div>
      <div className={styles.items}>

      </div>
    </section>    
  );
}

function Card(props){
  return(
    <div className={styles.card-border}>
      
    </div>
  );
}