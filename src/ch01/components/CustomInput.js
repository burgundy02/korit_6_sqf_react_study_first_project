// 컴포넌트의 매개변수는 무조건 props(객체) -> 비구조 할당으로 받는다.
function CustomInput({ ph, disabled, value }) {
    return <input type="text" placeholder={ph} disabled={disabled} value={value}/>
}

// JSX에서 컴포넌트에 매개변수를 주지 않았을 때 나올 default 값 설정(객체 형태로)
CustomInput.defaultProps = {
    ph: "test",
    disabled: false,
    value: "빈값"  
}

export default CustomInput;

