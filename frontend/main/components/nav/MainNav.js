"use client";
import { sectionsConfig } from "@/config/sections";


export default function MainNav(){
    return(
        <nav className="nav">
            <ul className="menu">
                {sectionsConfig.map(({anchor, label}) => (
                    <li key={anchor} data-manuanchor={anchor}>
                        <a href={`#${anchor}`}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}