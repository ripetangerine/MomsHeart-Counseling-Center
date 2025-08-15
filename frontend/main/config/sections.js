export const sectionsConfig = [
    { key: "hero",    anchor: "home",    label: "Home" },
    { key: "about",   anchor: "about",   label: "About" },
    { key: "contact", anchor: "contact", label: "Contact" },
];
  
export const fullpageOptions = {
    anchors: sectionsConfig.map(s => s.anchor),
    menu: "#mainMenu",          // Nav와 앵커 동기화(활성 클래스 자동)
    autoScrolling: true,
    navigation: true,           // 우측 점 네비(원하면 false)
    scrollingSpeed: 700,
    responsiveWidth: 768,       // 768 이하에선 일반 스크롤로 자동 전환
    lockAnchors: false,         // URL에 #home 같은 앵커 유지
};
  