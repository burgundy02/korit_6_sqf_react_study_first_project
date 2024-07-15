
import { useState } from "react";

function App() {
    const [ number, setNumber ] = useState(100); // 상태 // [초기값, 함수] number /number에 초기값 100, setNumber에 함수
    const [ name, setName ] = useState(null); // name에 null, setName에 함수

    const [ test, testPrint ] = 
        [ 100, function () {console.log("test함수 호출")} ]
    
    testPrint(); //console.log("test함수 호출") 콘솔

    console.log(number); // 100

    if(number === 100) {
        setTimeout(() => setNumber(200), 2000); // number를 2초 뒤에 200으로 바꾼다. /2000: 2초
        // 상태변화 > 상태변화할 때 App함수 재호출(재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다! 처음에만 100이 들어감(초기화)
    }

    if(number === 200) {
        setNumber(300); // useState의 setter는 비동기 / 바뀌진않고 바꿔라고 말만함 / 바꿔라 -> consol.log(number) -> 바꿔라에서 바뀜(상태변화) -> 재렌더링 / 같은 값이라도 들어가면 새로 호출(재렌더링)
        console.log(number);
    }

    if(name === null) {
        setName("김해민");
    }
    console.log(name);
    
    return <>
        <h1>number 상태 확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;