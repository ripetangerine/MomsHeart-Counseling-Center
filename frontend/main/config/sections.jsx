export const sectionsConfig = [
  { key: 'hero', anchor: 'hero', label: 'home', navFlag: false },
  { key: 'about', anchor: 'about', label: '센터 안내', navFlag: true },
  { key: 'partners', anchor: 'partners', label: '파트너', navFlag: false },
  { key: 'review', anchor:'review', label:'후기', navFlag: false},
  // { key: 'loadMap', anchor:'loadMap', label:'오시는길', navFlag: false},
  { key: 'expert', anchor: 'expert', label: '전문가 소개', navFlag: true },
  { key: 'counselprogram', anchor: 'counselprogram', label: '상담 프로그램', navFlag: true,},
  { key: 'program2', anchor: 'program2', label: '검사 프로그램', navFlag: true,},
  { key: 'program3', anchor: 'program3', label: '상담 교육', navFlag: true,},
]

export const navItems = sectionsConfig.filter((s) => s.navFlag)
