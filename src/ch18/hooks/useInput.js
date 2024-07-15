import { useState } from "react";

// hook 함수는 앞에 use붙음
export function useInupt(defaultValue, length) {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        if(e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }
    
    return {
        value, 
        setValue,
        "onChange" : onChange
    }
}