import { sectionsConfig } from "@/config/sections";

export default function SectionHero(){
    const styles = require("./SectionHero.module.css");
    return(
        <section id="home" className={`secton ${styles.wrap}`}>
            <div>
                <h1 className={styles.title}>Hero 섹션</h1>
                <p className={styles.subtitle}>첫 화면 카피/CTA 영역</p>
            </div>
        </section>
    );
}