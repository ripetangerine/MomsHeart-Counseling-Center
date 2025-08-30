'use client'
import { SectionMap } from '@/components/sections/index'
import { sectionsConfig } from '@/config/sections.jsx'

export default function Page() {

  // null safety 적용

  return (
    <>
      {sectionsConfig.map(({ key, anchor }) => {
        const Section = SectionMap[key]
        if (!Section) return null
        return Section ? <Section id={anchor} key={anchor} /> : null
      })}
    </>
  )
}
