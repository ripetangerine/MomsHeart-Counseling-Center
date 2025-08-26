'use client'
import { navItems } from '@/config/sections'
import useActiveSection from './useActiveSection'

export default function MainNav() {
  const anchors = navItems.map((s) => s.anchor)
  const active = useActiveSection(anchors)
  const heroSectionInfo = {
    key: 'hero',
    anchor: 'hero',
    label: 'home',
    navFlag: false,
  }

  const Logo = () => {
    return (
      <>
        <li
          key={heroSectionInfo['anchor']}
          className={heroSectionInfo['anchor']} //hero
        >
          <a href={`#${heroSectionInfo['anchor']}`}>
            <img src="/nav/main_logo.png" alt="상담센터로고/hero" />
          </a>
        </li>
      </>
    )
  }

  return (
    <>
      <nav className="nav">
        <ul className="menu">
          <Logo />
          {navItems.map(({ anchor, label }) => (
            <li key={anchor} className={active === anchor ? 'active' : ''}>
              <a href={`#${anchor}`}>{label}</a>
            </li>
          ))}
          <button onClick={() => null}>예약 및 문의</button>
        </ul>
      </nav>
    </>
  )
}
