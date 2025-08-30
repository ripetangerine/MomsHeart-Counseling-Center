export const sectionsConfig = [
  { key: 'hero', anchor: 'hero', label: 'home', navFlag: false },
  { key: 'about', anchor: 'about', label: '센터 안내', navFlag: true },
  { key: 'review', anchor:'review', label:'후기', navFlag: false},
  { key: 'map', anchor:'map', label:'오시는길', navFlag: false},
  { key: 'intro', anchor: 'intro', label: '전문가 소개', navFlag: true },
  { key: 'program1', anchor: 'program1',label: '상담 프로그램', navFlag: true,},
  { key: 'program2', anchor: 'program2', label: '검사 프로그램', navFlag: true, },
  { key: 'education', anchor: 'education', label: '상담교육', navFlag: true },
]

export const navItems = sectionsConfig.filter((s) => s.navFlag)
