import {useState} from "react";
import styles from "./css/CounselProgram.module.css";
import data from "@/data/counsel_program";

export default function CounselProgram(){
  return(
      <section className="section" ClassName={styles.program}>
        <div className={styles.container}>
          <div className={styles.title}>상담프로그램</div>
          <div className={styles.buttons}>
            {data.map((v,i)=>{
              return(
                <button 
                  className={`${styles.button_item}`} 
                  onClick={(v)=>{
                    return(
                      <Card data={v}/>
                    );
                  }}
                  key={i}
                >
                  {v['name']}
                </button>
              ); 
            })}
          </div>
        </div>
      </section>
  );
}

function Card({v: data}){
  return(
    <div className={styles.card}>
      <div className={`${styles.container}`}>
        <div>
          <div className={styles.title1}>{data.name}</div>
          <div className={styles.subtitle}>{data.subtitle}</div>
          <div className={styles.intro}>{data.intro}</div>
        </div>
        <div>
          <div className={styles.title2}>{"이런 분께 추천드려요"}</div>
          <div className={styles.recommend}>
            {/*  */}
          </div>
        </div>
        <div>
          <div className={styles.title3}>{"상담 진행 방식"}</div>
          <div className={styles.title3_content}>
            <div>{data.counsel_process}</div>
            <div>{data.counsel_frequancy}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}