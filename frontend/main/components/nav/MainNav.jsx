'use client'
import { navItems } from '@/config/sections.jsx' // nav 표기 section
import useActiveSection from './useActiveSection.jsx'
import '@/components/nav/MainNav.css'

export default function MainNav() {
  const anchors = navItems.map((s) => s.anchor) //배열의 anchor 속성 뽑기
  const active = useActiveSection(anchors)

  return (
    <>
      <nav className="nav">
        <div className="nav_inner">
          {/* 로고 */}
          <a href={`#${'hero'}`}>
            <img src="/nav/main_logo.png" alt="상담센터로고/hero" />
          </a>
          {/* 메뉴 */}
          <div className="menu">
            {navItems.map(({ anchor, label }) => (
              <li key={anchor} className={active === anchor ? 'active' : ''}>
                <a href={`#${anchor}`}>{label}</a>
              </li>
            ))}
          </div>
          <div className="cta">
            <button onClick={() => null} className="book_btn">
              예약 및 문의
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
