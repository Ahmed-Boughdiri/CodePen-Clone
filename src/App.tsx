import React from 'react';
import './App.css';
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
  return (
    <div className="App">
      <TopSection
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
      />
      <BottomSection
        html={html}
        css={css}
        js={js}
      />
    </div>
  );
}

export default App;
