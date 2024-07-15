function Button({ text, setNumber }) {  // 증가, setNumber

    const handleClick = () => {    // userState(상태) 함수 안에 매개변수로 값이 있다. setNumber에 매개변수로 값이 들어옴(number가 매개변수)
        if(text === "증가") {
            setNumber(number => number + 1); // 0이 매개변수, number + 1이 리턴 값  // 0 + 1 해서 상태변환 -> 재렌더링 -> App.js에서 재렌더링
        }
        if(text === "감소") {
            setNumber(number => number - 1);
        }
    }

    return <button onClick={handleClick}>{ text }</button>  //버튼 안에 증가, 감소를 {text}로
}

export default Button;