/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useInupt } from "../../hooks/useInput";

function CustomHookPage(props) {
    const useNameInut = useInupt("test", 20);
    const passwordInput = useInupt("", 10);
   
    return (
        <div>
            <input type="text" onChange={useNameInut.onChange} value={useNameInut.value}/>
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value}/>
        </div>
    );
}

export default CustomHookPage;