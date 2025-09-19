import Hero from "./Hero";
import About from "./About";
import Review from "./Review";
// import LoadMap from "./LoadMap";
import Intro from "./Expert";
import Partners from "./Partners";
// import CounselProgram from "./CounselProgram";
// import TestProgram from "./TestProgram";


/**  
 * 
 * SectionMap 내부에서 page의 변수를
 * config/section.jsx의 anchor 값과 동기화 시 페이지에 표시
 * 
 * */  

export const SectionMap = {
    hero: Hero,
    about: About,
    review: Review,
    partners: Partners,
    // loadMap: LoadMap,
    expert: Intro,
    // counselprogram : CounselProgram,
    // testprogram : TestProgram,
};