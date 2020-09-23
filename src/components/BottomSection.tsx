import React from "react";
import "../layout/BottomSection.css";
import "../layout/Mobile.css";

interface SectionProps {
    html: string,
    css: string,
    js: string
}

const BottomSection:React.FC<SectionProps> = ({ html, css, js }) =>{
    const [code, setCode] = React.useState<string|undefined>("");
    React.useEffect((): any =>{
        const delay = setTimeout((): void =>{
            setCode(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `)
        },300)
        return (): void => clearTimeout(delay)
    },[html,css,js]);
    return (
        <div className="bottom-section">
            <iframe 
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                height="100%"
                width="100%"
                srcDoc={(!code) ? "" : code}
            />
        </div>
    )
}

export default BottomSection;
