export const sectionsConfig = [
    { key: "hero",    anchor: "hero",    label: "home", nav:false },
    { key: "about",   anchor: "about",   label: "센터소개", nav:true },
    { key: "intro", anchor: "intro", label: "전문가 소개", nav:true },
];

export const navItems = sectionsConfig.filter(s => s.showInNav);
  