'use client';

import { useState, useCallback, useEffect } from 'react';
import styles from "./css/Expert.module.css";
import experts from "@/data/expert.json";

export default function Expert(){
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = useCallback((expert) => {
    setSelected(expert);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setSelected(null);
  }, []);

  // ESC로 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeModal]);

  return(
    <section className={`section ${styles.expert}`} style={{ background: "#f7f7f7" }}>
      <div className={styles.title}>전문가 소개</div>
      <div className={styles.sub_title}>클릭하시면 더 자세한 소개들을 볼 수 있습니다</div>

      <div className={styles.items}>
        {experts.map((v) => (
          <Card
            key={v.id ?? v.name}     // 의미 있는 키 권장
            expert={v}
            onOpen={() => openModal(v)}
          />
        ))}
      </div>

      {open && selected && (
        <div className={styles.modal_overlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <img className={styles.modal_img} src={selected.image.length <= 0 ? "non/expert.png" : selected.image} alt={selected.name}/>
              <div className={styles.modal_title}>{selected.name}</div>
              <button className={styles.modal_close} onClick={closeModal}>닫기</button>
            </div>

            <p style={{color:"#555", lineHeight:1.6, marginBottom:12}}>
              {selected.bio}
            </p>

            <div className={styles.card_category} style={{marginBottom:16}}>
              {(selected.category ?? []).map((c,i) => (
                <span className={styles.categorys} key={i}>{c}</span>
              ))}
            </div>

            <ul style={{paddingLeft:18, lineHeight:1.6}}>
              {(selected.current_record ?? []).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

function Card({ expert, onOpen }) {
  const CategoryRender = ({ item }) => (
    <div className={styles.categorys}>{item}</div>
  );

  return (
    <button
      type="button"
      className={`${styles.card_container} ${styles.card_clickable}`}
      onClick={onOpen}
    >
      <img className={styles.card_img} src={expert.image.length <= 0 ? "non/expert.png" : expert.image} alt={expert.name}/>
      <div className={styles.card_content}>
        <div className={styles.card_name}>{expert.name}</div>
        <div className={styles.card_bio}>{expert.bio}</div>

        <div className={styles.card_category}>
          {(expert.category ?? []).map((v, i) => (
            <CategoryRender item={v} key={i}/>
          ))}
        </div>

        <div className={styles.current_record}>
          {(expert.current_record ?? []).slice(0, 3).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </button>
  );
}
