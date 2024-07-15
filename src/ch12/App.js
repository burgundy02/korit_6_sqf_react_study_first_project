import { useEffect, useState } from "react";
function App() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    
    // 첫 번째는 함수, 두 번째는 []디펜전시: 어떤 상태가 변했을 때
    // number,number2상태가 변했을 때만 동작, 함수는 number가 변하고 나면 실행할 동작
    // 디펜전시가 없으면 최초의 한 번만 실행된다.
    useEffect(() => {
        // 마운트(체결,연결) 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    },[number, number2]);

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }


    return ( 
        <>
        <h1>{number}</h1>
        <h1>{number2}</h1>
        <h1>{number3}</h1>
        <button onClick={handleButtonClick}>num1 증가</button>
        <button onClick={handleButtonClick2}>num2 증가</button>
        </>
     );
}

export default App;