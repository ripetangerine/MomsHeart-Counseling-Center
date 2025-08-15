"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 화면에 많이 보이는 섹션을 active로 설정
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.5, 0.75, 0.98], // 절반 이상 보이면 활성화
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}
