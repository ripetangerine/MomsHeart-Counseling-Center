export const sectionsConfig = [
  { key: 'hero', anchor: 'hero', label: 'home', navFlag: false },
  { key: 'about', anchor: 'about', label: '센터 안내', navFlag: true },
  { key: 'intro', anchor: 'intro', label: '전문가 소개', navFlag: true },
]

export const navItems = sectionsConfig.filter((s) => s.navFlag)
