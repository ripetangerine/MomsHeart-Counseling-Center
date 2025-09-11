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

  // 모달 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return(
    <section id="expert" className={`section ${styles.expert}`} style={{ background: "#f7f7f7" }}>
      <div className={styles.title}>전문가 소개</div>
      <div className={styles.sub_title}>클릭하시면 더 자세한 소개들을 볼 수 있습니다</div>

      <div className={styles.items}>
        {experts.map((v) => (
          <Card
            key={v.id ?? v.name}  
            expert={v}
            onOpen={() => openModal(v)}
          />
        ))}
      </div>

      {open && selected && (
        <div className={styles.modal_overlay} role="dialog" aria-modal="true" onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal_header}>
              <img
                className={styles.modal_img}
                src={selected.image || '/non/expert.png'}
                alt={selected.name}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/non/expert.png'; }}
              />
              <div className={styles.modal_title}>{selected.name}</div>
              <button className={styles.modal_close} onClick={closeModal}>닫기</button>
            </div>

            {/* 소개 */}
            {selected.bio && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>소개</div>
                <p style={{color:'#555', lineHeight:1.7}}>{selected.bio}</p>
              </div>
            )}

            {/* 전문분야/카테고리 */}
            {(selected.category?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>전문분야</div>
                <div className={styles.section_tags}>
                  {selected.category.map((c, i) => (
                    <span className={styles.tag} key={i}>{c}</span>
                  ))}
                </div>
              </div>
            )}

            {/* 학력 */}
            {(selected.education?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>학력</div>
                <ul className={styles.section_list}>
                  {selected.education.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 자격/면허 */}
            {(selected.qualified?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>자격 및 면허</div>
                <ul className={styles.section_list}>
                  {selected.qualified.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 현재 활동 */}
            {(selected.current_record?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>현재 활동</div>
                <ul className={styles.section_list}>
                  {selected.current_record.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 경력 */}
            {(selected.former_record?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>주요 경력</div>
                <ul className={styles.section_list}>
                  {selected.former_record.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 연구 */}
            {(selected.research?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>연구</div>
                <ul className={styles.section_list}>
                  {selected.research.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 출판/저서 */}
            {(selected.publications?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>출판 및 저서</div>
                <ul className={styles.section_list}>
                  {selected.publications.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 강의/교육 */}
            {(selected.courses?.length ?? 0) > 0 && (
              <div className={styles.modal_section}>
                <div className={styles.section_title}>강의/교육</div>
                <ul className={styles.section_list}>
                  {selected.courses.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
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
      <img
        className={styles.card_img}
        src={expert.image || '/non/expert.png'}
        alt={expert.name}
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/non/expert.png'; }}
      />
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
