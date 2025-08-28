'use client'
import { SectionMap } from '@/components/sections'
import { sectionsConfig } from '@/config/sections.jsx'

export default function Page() {

  // section 생성
  // sectionConfig & section 파일 전체 불러와서 maping
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
