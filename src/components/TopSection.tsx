import React from "react";
import "../layout/TopSection.css";
import CodeSection from "./CodeSection";
import "../layout/Mobile.css";

interface SectionProps {
    html: string,
    css: string,
    js: string,
    setHtml: any,
    setCss: any,
    setJs: any
}

const TopSection:React.FC<SectionProps> = (props) =>{
    const {
        html,
        css,
        js,
        setHtml,
        setCss,
        setJs
    } = props;
    return (
        <div className="top-section">
            <CodeSection 
                value={html}
                handleChange={(editor: any, data: any, value: any) =>setHtml(value)}
                lang="xml"
                title="HTML"
            />
            <CodeSection 
                value={css} 
                handleChange={(editor: any, data: any, value: any) =>setCss(value)}
                lang="css"
                title="CSS"
            />
            <CodeSection 
                value={js} 
                handleChange={(editor: any, data: any, value: any) =>setJs(value)}
                lang="javascript"
                title="JavaScript"
            />
        </div>
    )
}

export default TopSection;
