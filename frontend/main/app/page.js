"use client";
import { SectionMap } from "@/components/sections";
import { sectionsConfig } from "@/config/sections";

export default function Page(){
    return(
        <>
            {sectionsConfig.map(({key, id})=>{
                const Section = SectionMap[key];
                if(!Section) return null;
                return <Section key={id}/>;
            })}
        </>
    )
}