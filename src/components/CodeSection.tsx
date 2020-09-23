import React from "react";
import "../layout/CodeSection.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css";
import { Controlled as Editor } from "react-codemirror2";
import "../layout/Mobile.css";

interface Sectionprops {
    handleChange: any,
    value: string,
    lang: string,
    title: string
}

const CodeSection:React.FC<Sectionprops> = (props) =>{
    const { 
        handleChange, 
        value, 
        lang, 
        title, 
    } = props;
    const [min, setMin] = React.useState<Boolean>(false)
    return (
        <div className="code-section">
            <div className="code-container" style={{height: min ? "50px" : "90%", marginBottom: min ? "-67%": 0}}>
                <div className="code-lang">
                    <h4>{title}</h4>
                    <img src={require("../assets/min.png")} alt="" onClick={() =>setMin(prev => !prev)} />
                </div>
                <div className={`${min && "edit"}`}>
                    <Editor 
                            onBeforeChange={handleChange}
                            value={value}
                            className="editor-container"
                            options={{
                                lint: true,
                                mode: lang,
                                lineNumbers: true,
                                theme: "material"
                            }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeSection;
