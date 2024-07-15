
import { useState } from "react";
import Button from "./Button";

function App() {
const [ number, setNumber ] = useState(0);

    //  Button 함수 호출
    return <>
        <h1>번호: {number}</h1>
        {/* 0 + 1이라는 리턴값을 가진 setNumber함수를 호출 -> 1이 리턴됨 */}
        <Button text={"증가"} setNumber={setNumber}></Button>
        <Button text={"감소"} setNumber={setNumber}></Button>
    </>
}

export default App;