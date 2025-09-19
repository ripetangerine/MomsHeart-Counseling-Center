"use client";
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import styles from "./css/CounselingProgram.module.css";

export default function CounselingPrograms({ title, tabs = [], data = {}, defaultTab }) {
  const initial = tabs.length ? defaultTab || tabs[0] : null;
  const [active, setActive] = useState(initial);

  // 키보드 네비게이션
  const tabRefs = useRef([]);
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  const onKeyDown = useCallback(
    (e) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const idx = tabs.indexOf(active);
      let next = idx;
      if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
      if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = tabs.length - 1;
      setActive(tabs[next]);
      tabRefs.current[next]?.focus();
    },
    [active, tabs]
  );

  const programs = useMemo(() => (active ? data[active] || [] : []), [active, data]);

  return (
    <section className={`${styles.section} ${styles.program}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>

        {/* 탭 */}
        <div role="tablist" aria-label="상담 카테고리" onKeyDown={onKeyDown} className={styles.tabList}>
          {tabs.map((label, i) => {
            const selected = active === label;
            return (
              <button
                key={label}
                role="tab"
                ref={(el) => (tabRefs.current[i] = el)}
                aria-selected={selected}
                aria-controls={`panel-${i}`}
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 카드 그리드 */}
        <div className={styles.grid}>
          {programs.map((p, idx) => (
            <article key={idx} id={`panel-${idx}`} role="tabpanel" className={styles.card}>
              <header className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  {p.quote && <p className={styles.cardQuote}>“{p.quote}”</p>}
                </div>
                {p.more && (
                  <button type="button" className={styles.moreBtn} onClick={p.more.onClick}>
                    상세 더보기
                  </button>
                )}
              </header>

              {p.recommended?.length > 0 && (
                <div className={styles.recommended}>
                  <div className={styles.subTitle}>이런 분께 추천드려요.</div>
                  <div className={styles.tags}>
                    {p.recommended.map((tag, i2) => (
                      <span key={i2} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {p.process && (
                <div className={styles.process}>
                  <div className={styles.subTitle}>상담 진행 방식</div>
                  <p className={styles.text}>{p.process}</p>
                </div>
              )}

              {p.pricing && (
                <div className={styles.pricingBox}>
                  <div className={styles.subTitle}>상담 비용</div>
                  <div className={styles.text}>{p.pricing}</div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
