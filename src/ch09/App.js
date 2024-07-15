import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [names, setNames] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [ ...names, inputValue]);  // 매개변수 names , 리턴값 
            setInputValue("");
        }
    }

    // {names.map(name => <li>{name}</li>)} 리액트는 조인 안해도 됨

    return<>
    <input onChange={handleInputChange}
    onKeyDown={handleInputKeyDown}
    value={inputValue}/>
    <ul>
        {/* 배열 통채로 넣으면 하나의 jsx로 알아서 렌더링 함 */}
        { liList }
        {/* map돌리면 키 값 있어야 됨 */}
        {names.map((name, index) => <li key={index}>{name}</li>)}
    </ul>
    </>
}
export default App;