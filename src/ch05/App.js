import { useState } from "react";

function App() {
    // inputValue이름을 가진 상태
    const [inputValue, setInputValue ] = useState("");

    // 입력이 일어날 때 마다 재정의가 일어난다
    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // value값을 계속 들고온다
    }
   
    const handleResetClick = () => {
        setInputValue("");  // 값이 들어있던 함수 비우기
    }

    return <>
        <h3>값: {inputValue}</h3> 
        {/* 이게 렌더링돼서 보여짐 */}
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}></input>  
        {/* onChange는 value가 변할 떄 마다 동작 */}
    </>
}

export default App;