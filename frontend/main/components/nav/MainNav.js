"use client";
import { sectionsConfig, navItems } from "@/config/sections";
import useActiveSection from "./useActiveSection";


export default function MainNav(){
    const ids = navItems.map(s=>s.id);
    const active = useActiveSection(ids);


    return(
        <nav className="nav">
            <ul className="menu">
                {sectionsConfig.map(({anchor, label}) => (
                    <li key={anchor} className={active===anchor? "active":""}>
                        <a href={`#${anchor}`}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}