import { useEffect, useState } from "react";

const PRIFIX = "codepen-clone-";

export default function useLocalStorage(key: string, initialValue: any) {
    const prefixedKey = PRIFIX + key;
    const [value, setValue] = useState(() =>{
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue) return JSON.parse(jsonValue);
        if(typeof initialValue === "function") {
            return initialValue();
        } else {
            return initialValue;
        }
    })
    useEffect(() =>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[value, prefixedKey]);
    return [value, setValue]
}
