
import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0); // 두 번째 렌더링: num === -10
    let num2 = 0; // 재렌더링 되면 다시 0으로 초기화 userState가 아니라 그냥 변수라서 

    const [ a, b ] = [ 10, 20 ];
    const [ c, d ] = [ 10, 20 ];

    a = 100; // 을 한다고 배열의 값 10이 변하지는 않는다. 100을 넣어도 배열 안에 있는 10은 변하지 않는다

    const handleClick = (e) => {
        const value = parseInt(e.target.value);  // value : 문자열이라서 인트로 바꿔줘야 함
        // console.log(typeof value); // typeof: 뒤의 타입을 알려줌
        setNum(num + (value));  // ex)0 + -10  -> 상태변화 -> 재렌더링
    // =
        // setNum(n => n + value); // 매개변수 n은 해당 상태의 값을 가져옴
        num2 += value;  // 아무리 재렌더링해도 화면에는 0임
        console.log(num2); // setNum(num + (value)); 주석하고 콘솔로 보면 값은 계속 바뀌고 있다.
    }

    console.log(num);
    console.log(num2);

    return <>
            <h1>번호: {num}</h1>
            <h1>번호2: {num2}</h1>
            <button onClick={handleClick} value={-10}>-10</button>
            <button onClick={handleClick} value={+10}>+10</button>
            <button onClick={handleClick} value={-100}>-100</button>
            <button onClick={handleClick} value={+100}>+100</button>
    </>
}

export default App;