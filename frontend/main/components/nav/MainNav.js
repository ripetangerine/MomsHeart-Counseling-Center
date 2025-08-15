'use client'
import { navItems } from '@/config/sections'
import useActiveSection from './useActiveSection'

export default function MainNav() {
  const anchors = navItems.map((s) => s.anchor)
  const active = useActiveSection(anchors)

  return (
    <nav className="nav">
      <ul className="menu">
        {navItems.map(({ anchor, label }) => (
          <li key={anchor} className={active === anchor ? 'active' : ''}>
            <a href={`#${anchor}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
