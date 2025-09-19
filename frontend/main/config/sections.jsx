export const sectionsConfig = [
  { key: 'hero', anchor: 'hero', label: 'home', navFlag: false },
  { key: 'about', anchor: 'about', label: '센터 안내', navFlag: true },
  { key: 'partners', anchor: 'partners', label: '파트너', navFlag: false },
  // { key: 'review', anchor:'review', label:'후기', navFlag: false}, -- 후기 페이지
  // { key: 'loadMap', anchor:'loadMap', label:'오시는길', navFlag: false}, -- 오는 길 페이지
  // -- nav/전문가 페이지
  { key: 'expert', anchor: 'expert', label: '전문가 소개', navFlag: true },
  // -- nav/상담 프로그램
  { key: 'counselprogram', anchor: 'counselprogram', label: '상담 프로그램', navFlag: true,}, 
  // -- nav/검사 프로그램
  { key: 'testprogram', anchor: 'testprogram', label: '검사 프로그램', navFlag: true,}, 
]

export const navItems = sectionsConfig.filter((s) => s.navFlag)
