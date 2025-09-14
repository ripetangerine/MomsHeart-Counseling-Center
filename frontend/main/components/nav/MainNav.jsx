'use client'
import { useState, useCallback, useEffect } from 'react'
import { navItems } from '@/config/sections.jsx' // nav 표기 section
import useActiveSection from './useActiveSection.jsx'
import '@/components/nav/MainNav.css'
import Link from 'next/link'

export default function MainNav() {
  const anchors = navItems.map((s) => s.anchor)
  const active = useActiveSection(anchors)
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((v) => !v), [])
  const close = useCallback(() => setOpen(false), [])

  // 네비가 열려 있을 때 뒤 스크롤 방지 (모바일 UX)
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])

  return (
    <>
      <nav className="nav">
        <div className="nav_inner">
          {/* 로고 */}
          <Link href={`#${'hero'}`} className="nav_logo" onClick={close}>
            <img src="/nav/main_logo.png" alt="상담센터로고/hero" />
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="menu">
            {navItems.map(({ anchor, label }) => (
              <li key={anchor} className={active === anchor ? 'active' : ''}>
                <Link href={`#${anchor}`}>{label}</Link>
              </li>
            ))}
          </div>
          <div className="cta">
            <button onClick={() => null} className="book_btn">예약 및 문의</button>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={toggle}
          >
            <span/>
            <span/>
            <span/>
          </button>
        </div>

        {/* 모바일/태블릿 드롭다운 메뉴 */}
        {open && (
          <div className="mobile_menu" role="dialog" aria-modal="true" onClick={close}>
            <div className="mobile_menu_inner" onClick={(e) => e.stopPropagation()}>
              <ul>
                {navItems.map(({ anchor, label }) => (
                  <li key={anchor} className={active === anchor ? 'active' : ''}>
                    <Link href={`#${anchor}`} onClick={close}>{label}</Link>
                  </li>
                ))}
              </ul>
              <button className="book_btn wide" onClick={() => {window.location.href = 'http://pf.kakao.com/_AIuEn'; close();}}>예약 및 문의</button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
