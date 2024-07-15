import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationPage() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [num, setNum] = useState(0);

    const a = useMemo(() => {
        console.log(num);
        return num + 10; // return 값은 a에 들어감
    }, [num]);


    // 최초의 한 번만 재정의
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    // 얘는 렌더링 할 때마다 재정의
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    // value가 바뀌면 재정의
    const handleClick = useCallback((e) => {
        setNum(parseInt(value));
    }, [value])

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange}/>
            <input type="text" onChange={handleChange2}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemoizationPage;